<?php

namespace App\Contracts\Repositories;

use App\DTOs\Input\SchedulingTimelineDTO;
use Illuminate\Database\Eloquent\Collection;

interface ShopScheduleRepositoryContract
{
    public function create(SchedulingTimelineDTO $dto, int $shop_id): void;

    public function getWeeksSchedule(int $shop_id): Collection;
}