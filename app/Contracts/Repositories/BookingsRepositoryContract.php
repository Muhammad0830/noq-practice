<?php

namespace App\Contracts\Repositories;

use Carbon\CarbonInterface;
use Illuminate\Support\Collection;

interface BookingsRepositoryContract
{
    public function getForOneDay(int $service_id, CarbonInterface $date): Collection;
}