<?php

namespace App\Contracts\Services;

use App\DTOs\Output\FilteredWeeksScheduleDTO;


interface SchedulingServiceContract
{
    public function getWeeksSchedule(int $shop_id): FilteredWeeksScheduleDTO; 
}