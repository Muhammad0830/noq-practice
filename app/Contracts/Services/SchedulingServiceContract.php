<?php

namespace App\Contracts\Services;

use App\DTOs\Input\SchedulingDTO;
use App\DTOs\Output\FilteredWeeksScheduleDTO;


interface SchedulingServiceContract
{
    public function getWeeksSchedule(int $shop_id): FilteredWeeksScheduleDTO; 

    public function updateSchedules(SchedulingDTO $dto, int $shop_id): void;
}