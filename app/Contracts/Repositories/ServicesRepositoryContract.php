<?php

namespace App\Contracts\Repositories;

use App\DTOs\ServiceDTO;
use App\DTOs\ServiceUpdateDTO;
use App\Models\Service;

interface ServicesRepositoryContract
{
    public function find(int $id): Service;

    public function create(ServiceDTO $dto, int $shop_id): void;

    public function update(Service $service, ServiceUpdateDTO $dto): void;
}