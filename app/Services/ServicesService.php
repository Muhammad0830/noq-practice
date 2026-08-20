<?php

namespace App\Services;

use App\Contracts\Repositories\ServicesRepositoryContract;
use App\Contracts\Services\ServicesServiceContract;
use App\DTOs\ServiceDTO;

class ServicesService implements ServicesServiceContract
{
    public function __construct(
        private ServicesRepositoryContract $repository
    ) {
    }

    public function create(array $services, int $shop_id): void
    {
        foreach ($services as $key => $service) {
            $this->repository->create($service, $shop_id);
        }
    }
}