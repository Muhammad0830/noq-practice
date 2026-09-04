<?php

namespace App\Services;

use App\Contracts\Repositories\BookingsRepositoryContract;
use App\Contracts\Services\BookingServiceContract;
use App\DTOs\Input\BookingCreateDTO;
use App\DTOs\Output\ShopOperatingScheduleDTO;
use App\Enums\BookingStatusEnum;
use App\Models\Service;
use Carbon\Carbon;
use Carbon\CarbonInterface;

class BookingService implements BookingServiceContract
{
    public function __construct(
        private BookingsRepositoryContract $repository,
    ) {
    }

    public function create(BookingCreateDTO $dto, Service $service, int $user_id): void
    {
        $start_time = Carbon::parse($dto->date);
        $end_time = Carbon::parse($dto->date)->addMinutes($service->duration_min);

        $data = [
            'shop_id' => $dto->shop_id,
            'service_id' => $dto->service_id,
            'user_id' => $user_id,
            'start_time' => $start_time,
            'end_time' => $end_time,
            'status' => BookingStatusEnum::PENDING,
        ];

        $this->repository->create($data);
    }

    public function getOneDayBookings(int $service_id, CarbonInterface $date): array
    {
        $bookings = $this->repository->getForOneDay($service_id, $date)->toArray();

        $bookingWithTimeOnly = array_map(
            fn($booking) =>
            [
                'start_time' => $date->copy()
                    ->setTimeFromTimeString($booking['start_time']),
                'end_time' => $date->copy()
                    ->setTimeFromTimeString($booking['end_time']),
            ],
            $bookings
        );

        return $bookingWithTimeOnly;
    }

    public function availableTimes(
        ShopOperatingScheduleDTO $scheduleDTO,
        array $bookings,
        int $service_duration,
        ?int $service_buffer_time,
        CarbonInterface $date,
    ): array {
        $buffer = $service_buffer_time ?? 0;

        $open = $date->copy()->setTimeFromTimeString($scheduleDTO->open_time);
        $close = $date->copy()->setTimeFromTimeString($scheduleDTO->close_time);

        $blocked_intervals = [
            ...$bookings,
            ...$scheduleDTO->breaks,
        ];

        usort(
            $blocked_intervals,
            fn($a, $b) => $a['start_time']->timestamp <=> $b['start_time']->timestamp
        );

        $free_intervals = $this->getFreeIntervals(
            $open,
            $close,
            $blocked_intervals
        );

        return $this->generateSlots(
            $free_intervals,
            $service_duration,
            $buffer,
        );
    }

    private function getFreeIntervals(
        CarbonInterface $open,
        CarbonInterface $close,
        array $blocked_intervals,
    ): array {
        $free_intervals = [];

        $cursor = $open->copy();

        foreach ($blocked_intervals as $blocked) {
            if ($blocked['end_time']->lessThanOrEqualTo($cursor)) {
                continue;
            }

            if ($blocked['start_time']->greaterThan($cursor)) {
                $free_intervals[] = [
                    'start_time' => $cursor->copy(),
                    'end_time' => $blocked['start_time']->copy(),
                ];
            }

            if ($blocked['end_time']->greaterThan($cursor)) {
                $cursor = $blocked['end_time']->copy();
            }
        }

        if ($cursor->lessThan($close)) {
            $free_intervals[] = [
                'start_time' => $cursor,
                'end_time' => $close->copy(),
            ];
        }

        return $free_intervals;
    }

    private function generateSlots(
        array $free_intervals,
        int $service_duration,
        int $buffer,
    ): array {
        $slots = [];

        $total_duration = $service_duration + $buffer;

        foreach ($free_intervals as $interval) {
            $cursor = $interval['start_time']->copy();

            while (
                $cursor
                    ->copy()
                    ->addMinutes($total_duration)
                    ->lessThanOrEqualTo($interval['end_time'])
            ) {
                $slot_end = $cursor
                    ->copy()
                    ->addMinutes($total_duration);

                $service_end = $cursor
                    ->copy()
                    ->addMinutes($service_duration);

                $slots[] = [
                    'from' => $cursor->format('H:i'),
                    'service_to' => $service_end->format('H:i'),
                    'to' => $slot_end->format('H:i'),
                ];

                $cursor = $slot_end;
            }
        }

        return $slots;
    }
}