<?php

namespace App\Contracts\Services;

use App\DTOs\ServiceDTO;

interface ServicesServiceContract
{
    public function create(array $services, int $shop_id): void;
}