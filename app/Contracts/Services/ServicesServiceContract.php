<?php

namespace App\Contracts\Services;

use App\DTOs\Input\ServiceUpdateDTO;

interface ServicesServiceContract
{
    public function create(array $services, int $shop_id): void;

    public function update(ServiceUpdateDTO $dto): void;
}