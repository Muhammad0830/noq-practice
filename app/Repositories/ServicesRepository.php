<?php

namespace App\Repositories;

use App\Contracts\Repositories\ServicesRepositoryContract;
use App\DTOs\Input\ServiceDTO;
use App\DTOs\Input\ServiceUpdateDTO;
use App\Models\Service;

class ServicesRepository implements ServicesRepositoryContract
{
    public function find(int $id): Service
    {
        return Service::find($id);
    }

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

    public function update(Service $service, ServiceUpdateDTO $dto): void
    {
        $service->update([
            'name' => $dto->name,
            'description' => $dto->description,
            'price' => $dto->price,
            'duration_min' => $dto->duration_min,
            'is_active' => $dto->is_active,
            'buffer_time' => $dto->buffer_time,
        ]);
    }
}