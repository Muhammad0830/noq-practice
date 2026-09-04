<?php

namespace App\Contracts\Repositories;

use App\DTOs\Input\BookingCreateDTO;
use Carbon\CarbonInterface;
use Illuminate\Support\Collection;

interface BookingsRepositoryContract
{
    public function create(array $data): void;

    public function getForOneDay(int $service_id, CarbonInterface $date): Collection;
}