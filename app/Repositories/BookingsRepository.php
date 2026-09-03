<?php

namespace App\Repositories;

use App\Contracts\Repositories\BookingsRepositoryContract;
use App\Models\Booking;
use Carbon\CarbonInterface;
use Illuminate\Support\Collection;

class BookingsRepository implements BookingsRepositoryContract
{
    public function getForOneDay(int $service_id, CarbonInterface $date): Collection
    {
        return Booking::where('service_id', $service_id)->whereDate('start_time', $date)->get();
    }
}