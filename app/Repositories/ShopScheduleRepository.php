<?php

namespace App\Repositories;

use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\DTOs\Input\SchedulingTimelineDTO;
use App\Models\ShopSchedule;
use Illuminate\Database\Eloquent\Collection;

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

    public function getWeeksSchedule(int $shop_id): Collection
    {
        return ShopSchedule::where('shop_id', $shop_id)->get();
    }
}