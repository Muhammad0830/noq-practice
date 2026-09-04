<?php

namespace App\Contracts\Services;

use App\DTOs\Input\BookingCreateDTO;
use App\DTOs\Output\ShopOperatingScheduleDTO;
use App\Models\Service;
use Carbon\CarbonInterface;
use Illuminate\Support\Collection;

interface BookingServiceContract
{
    public function getOneDayBookings(int $service_id, CarbonInterface $date): array;

    public function availableTimes(
        ShopOperatingScheduleDTO $scheduleDTO,
        array $bookings,
        int $service_duration,
        ?int $service_buffer_time,
        CarbonInterface $date,
    ): array;

    public function create(BookingCreateDTO $dto, Service $service, int $user_id): void;
}