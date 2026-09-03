<?php

namespace App\Contracts\Services;

use App\DTOs\Input\SchedulingDTO;
use App\DTOs\Output\FilteredWeeksScheduleDTO;
use App\DTOs\Output\ShopOperatingScheduleDTO;
use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Collection;


interface SchedulingServiceContract
{
    public function getWeeksSchedule(int $shop_id): FilteredWeeksScheduleDTO;

    public function getOneDaysSchedule(int $shop_id, string $day, CarbonInterface $date): ShopOperatingScheduleDTO;

    public function updateSchedules(SchedulingDTO $dto, int $shop_id): void;
}