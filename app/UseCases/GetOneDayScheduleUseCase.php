<?php

namespace App\UseCases;

use App\Contracts\Services\BookingServiceContract;
use App\Contracts\Services\SchedulingServiceContract;
use App\Contracts\UseCases\GetOneDayScheduleUseCaseContract;
use App\DTOs\Output\ShopBookingScheduleDTO;
use App\Enums\WeekDaysEnum;
use Carbon\CarbonInterface;

class GetOneDayScheduleUseCase implements GetOneDayScheduleUseCaseContract
{
    public function __construct(
        private SchedulingServiceContract $schedulingService,
        private BookingServiceContract $bookingService,
    ) {
    }

    public function execute(
        int $shop_id,
        int $service_id,
        int $service_duration,
        ?int $service_buffer_time,
        CarbonInterface $date
    ): ShopBookingScheduleDTO {
        $day = WeekDaysEnum::getTodayLabel($date);

        $dto = $this->schedulingService->getOneDaysSchedule($shop_id, $day, $date);
        $bookings = $this->bookingService->getOneDayBookings($service_id, $date);

        if ($dto->open_time) {
            $availableTimes = $this->bookingService->availableTimes($dto, $bookings, $service_duration, $service_buffer_time, $date);
        }

        return new ShopBookingScheduleDTO(
            open_time: $dto->open_time,
            close_time: $dto->close_time,
            breaks: $dto->breaks,
            bookings: $bookings,
            available: $dto->open_time ? $availableTimes : [],
        );
    }
}