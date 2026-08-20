<?php

namespace App\Services;

use App\Contracts\Repositories\AdminRepositoryContract;
use App\Contracts\Services\AdminServiceContract;

class AdminService implements AdminServiceContract
{
    public function __construct(
        private AdminRepositoryContract $repository,
    ) {
    }

    public function create(int $user_id): int
    {
        return $this->repository->create($user_id);
    }

    public function connectToShop(int $admin_id, int $shop_id): void
    {
        $this->repository->connectToShop($admin_id, $shop_id);
    }
}