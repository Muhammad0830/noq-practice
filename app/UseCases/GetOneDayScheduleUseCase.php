<?php

namespace App\UseCases;

use App\Contracts\Services\SchedulingServiceContract;
use App\Contracts\UseCases\GetOneDayScheduleUseCaseContract;
use App\DTOs\Output\ShopOperatingScheduleDTO;
use App\Enums\WeekDaysEnum;

class GetOneDayScheduleUseCase implements GetOneDayScheduleUseCaseContract
{
    public function __construct(
        private SchedulingServiceContract $service,
    ) {
    }

    public function execute(int $shop_id): ShopOperatingScheduleDTO
    {
        $day = WeekDaysEnum::getToday();

        $dto = $this->service->getOneDaysSchedule($shop_id, $day);

        return $dto;
    }
}