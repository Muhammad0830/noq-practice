<?php

namespace App\Repositories;

use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\DTOs\Input\SchedulingTimelineDTO;
use App\Models\ShopSchedule;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Log;

class ShopScheduleRepository implements ShopScheduleRepositoryContract
{
    public function find(int $id): ShopSchedule|null
    {
        return ShopSchedule::find($id);
    }

    public function getOneDay(int $shop_id, string $day): Collection
    {
        Log::debug('debug', [$shop_id, $day, ShopSchedule::where('shop_id', $shop_id)->where('day_of_week', $day)->get()]);
        return ShopSchedule::where('shop_id', $shop_id)
            ->where('day_of_week', $day)
            ->get();
    }


    public function create(SchedulingTimelineDTO $dto, int $shop_id): void
    {
        ShopSchedule::create([
            'shop_id' => $shop_id,
            'day_of_week' => $dto->day_of_week,
            'start_time' => $dto->start_time,
            'end_time' => $dto->end_time,
            'type' => $dto->type,
        ]);
    }

    public function getWeeksSchedule(int $shop_id): Collection
    {
        return ShopSchedule::where('shop_id', $shop_id)->get();
    }

    public function update(ShopSchedule $scheduleModel, SchedulingTimelineDTO $dto): void
    {
        $scheduleModel->update([
            'start_time' => $dto->start_time,
            'end_time' => $dto->end_time,
            'type' => $dto->type,
        ]);
    }

    public function delete(ShopSchedule $scheduleModel, SchedulingTimelineDTO $dto): void
    {
        $scheduleModel->delete();
    }
}