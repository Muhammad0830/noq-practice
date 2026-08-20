<?php

namespace App\Contracts\Repositories;

interface AdminRepositoryContract
{
    public function create(int $user_id): int;

    public function connectToShop(int $admin_id, int $shop_id): void;
}