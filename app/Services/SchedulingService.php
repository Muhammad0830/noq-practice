<?php

namespace App\Services;

use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\Contracts\Services\SchedulingServiceContract;
use App\DTOs\Input\SchedulingDTO;
use App\DTOs\Input\SchedulingTimelineDTO;
use App\DTOs\Output\FilteredWeeksScheduleDTO;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class SchedulingService implements SchedulingServiceContract
{
    public function __construct(
        private ShopScheduleRepositoryContract $repository,
    ) {
    }

    public function getWeeksSchedule(int $shop_id): FilteredWeeksScheduleDTO
    {
        $all = $this->repository->getWeeksSchedule($shop_id)->toArray();

        return FilteredWeeksScheduleDTO::fromArray($all);
    }

    public function updateSchedules(SchedulingDTO $dto, int $shop_id): void
    {
        try {
            DB::transaction(function () use ($dto, $shop_id) {
                foreach ($dto->asArray() as $day) {
                    $schedulesToUpdate = [...$day->closed];
                    Log::debug('debugee', [$day]);

                    if ($day->isOpen) {
                        $schedulesToUpdate[] = $day->open;
                        $this->handleUpdate($schedulesToUpdate, $shop_id);
                    } else {
                        $this->handleDelete($day->open);
                    }
                }
            });
        } catch (Throwable $e) {
            throw $e;
        }
    }

    private function handleUpdate(array $schedulesToUpdate, int $shop_id): void
    {
        foreach ($schedulesToUpdate as $scheduleDto) {
            $scheduleModel = $this->repository->find($scheduleDto->id);

            if (!$scheduleModel) {
                $this->repository->create($scheduleDto, $shop_id);
            } else {
                $this->repository->update($scheduleModel, $scheduleDto);
            }

        }
    }

    private function handleDelete(SchedulingTimelineDTO $scheduleDto): void
    {
        $scheduleModel = $this->repository->find($scheduleDto->id);

        if ($scheduleModel) {
            $this->repository->delete($scheduleModel, $scheduleDto);
        }
    }
}