<?php

namespace App\Contracts\Services;

use App\Models\User;

interface AdminServiceContract
{
    public function create(int $user_id): int;

    public function connectToShop(int $admin_id, int $shop_id): void;
}