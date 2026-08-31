<?php

namespace App\Contracts\UseCases;

use App\DTOs\Output\ShopBookingScheduleDTO;
use Carbon\CarbonInterface;

interface GetOneDayScheduleUseCaseContract
{
    public function execute(
        int $shop_id,
        int $service_id,
        int $service_duration,
        ?int $service_buffer_time,
        CarbonInterface $date,
    ): ShopBookingScheduleDTO;
}