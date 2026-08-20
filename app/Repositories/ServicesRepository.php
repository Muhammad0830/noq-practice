<?php

namespace App\Repositories;

use App\Contracts\Repositories\ServicesRepositoryContract;
use App\DTOs\ServiceDTO;
use App\Models\Service;

class ServicesRepository implements ServicesRepositoryContract
{
    public function create(ServiceDTO $dto, int $shop_id): void
    {
        Service::create([
            'shop_id' => $shop_id,
            'name' => $dto->name,
            'description' => $dto->description,
            'price' => $dto->price,
            'duration_min' => $dto->duration_min,
            'buffer_time' => $dto->buffer_time,
            'is_active' => true,
        ]);
    }
}