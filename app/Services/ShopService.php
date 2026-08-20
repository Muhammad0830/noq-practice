<?php

namespace App\Services;

use App\Contracts\Repositories\ShopRepositoryContract;
use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\Contracts\Services\ShopServiceContract;
use App\DTOs\SchedulingDayDTO;
use App\DTOs\SchedulingDTO;
use App\DTOs\SchedulingTimelineDTO;
use App\DTOs\ShopDefinitionDTO;

class ShopService implements ShopServiceContract
{
    public function __construct(
        private ShopRepositoryContract $shopRepository,
        private ShopScheduleRepositoryContract $scheduleRepository,
    ) {
    }

    public function create(ShopDefinitionDTO $dto): int
    {
        return $this->shopRepository->create($dto);
    }

    public function addSchedules(SchedulingDTO $dto, int $shop_id): void
    {
        foreach ($dto->asArray() as $_ => $dayDto) {
            if (!$dayDto->isOpen) {
                continue;
            }

            foreach ($dayDto->items as $item) {
                $this->scheduleRepository->create($item, $shop_id);
            }
        }
    }
}