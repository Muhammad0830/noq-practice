<?php

namespace App\Repositories;

use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\DTOs\SchedulingTimelineDTO;
use App\Models\ShopSchedule;

class ShopScheduleRepository implements ShopScheduleRepositoryContract
{
    public function create(SchedulingTimelineDTO $dto, int $shop_id): void
    {
        ShopSchedule::create([
            'shop_id' => $shop_id,
            'day_of_week' => $dto->dayOfWeek,
            'start_time' => $dto->startTime,
            'end_time' => $dto->endTime,
            'type' => $dto->type,
        ]);
    }
}