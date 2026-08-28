<?php

namespace App\Contracts\UseCases;

use App\DTOs\Output\ShopOperatingScheduleDTO;

interface GetOneDayScheduleUseCaseContract
{
    public function execute(int $shop_id): ShopOperatingScheduleDTO;
}