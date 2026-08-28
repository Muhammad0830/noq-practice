<?php

namespace App\Contracts\Repositories;

use App\DTOs\Input\SchedulingTimelineDTO;
use App\Models\ShopSchedule;
use Illuminate\Database\Eloquent\Collection;

interface ShopScheduleRepositoryContract
{
    public function find(int $id): ShopSchedule|null;

    public function getOneDay(int $shop_id, string $day): Collection;

    public function create(SchedulingTimelineDTO $dto, int $shop_id): void;

    public function getWeeksSchedule(int $shop_id): Collection;

    public function update(ShopSchedule $scheduleModel, SchedulingTimelineDTO $dto): void;

    public function delete(ShopSchedule $scheduleModel, SchedulingTimelineDTO $dto): void;
}