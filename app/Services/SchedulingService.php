<?php

namespace App\Services;

use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\Contracts\Services\SchedulingServiceContract;
use App\DTOs\Output\FilteredWeeksScheduleDTO;

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
}