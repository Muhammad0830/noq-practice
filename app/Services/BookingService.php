<?php

namespace App\Services;

use App\Contracts\Repositories\BookingsRepositoryContract;
use App\Contracts\Services\BookingServiceContract;
use App\DTOs\Output\ShopOperatingScheduleDTO;
use Carbon\CarbonInterface;

class BookingService implements BookingServiceContract
{
    public function __construct(
        private BookingsRepositoryContract $repository,
    ) {
    }

    public function getOneDayBookings(int $service_id, CarbonInterface $date): array
    {
        $bookings = $this->repository->getForOneDay($service_id, $date)->toArray();

        $bookingWithTimeOnly = array_map(fn($booking) =>
            ['start_time' => $booking['start_time'], 'end_time' => $booking['end_time']], $bookings);

        return $bookingWithTimeOnly;
    }

    public function availableTimes(ShopOperatingScheduleDTO $scheduleDTO, array $bookings, int $service_duration): array
    {
        

        return [];
    }
}