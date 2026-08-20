<?php

namespace App\Contracts\Repositories;

use App\DTOs\SchedulingTimelineDTO;

interface ShopScheduleRepositoryContract
{
    public function create(SchedulingTimelineDTO $dto, int $shop_id): void;
}