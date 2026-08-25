<?php

namespace App\Contracts\Repositories;

use App\DTOs\Input\ServiceDTO;
use App\DTOs\Input\ServiceUpdateDTO;
use App\Models\Service;

interface ServicesRepositoryContract
{
    public function find(int $id): Service;

    public function create(ServiceDTO $dto, int $shop_id): void;

    public function update(Service $service, ServiceUpdateDTO $dto): void;
}