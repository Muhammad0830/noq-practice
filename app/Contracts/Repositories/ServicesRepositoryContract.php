<?php

namespace App\Contracts\Repositories;

use App\DTOs\ServiceDTO;

interface ServicesRepositoryContract
{
    public function create(ServiceDTO $dto, int $shop_id): void;
}