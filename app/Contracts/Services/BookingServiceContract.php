<?php

namespace App\Contracts\Services;

use App\DTOs\Output\ShopOperatingScheduleDTO;
use Carbon\CarbonInterface;
use Illuminate\Support\Collection;

interface BookingServiceContract
{
    public function getOneDayBookings(int $service_id, CarbonInterface $date): array;

    public function availableTimes(ShopOperatingScheduleDTO $scheduleDTO, array $bookings, int $service_duration): array;
}