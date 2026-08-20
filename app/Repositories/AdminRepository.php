<?php

namespace App\Repositories;

use App\Contracts\Repositories\AdminRepositoryContract;
use App\Models\Admin;
use App\Models\ShopAdmin;

class AdminRepository implements AdminRepositoryContract
{
    public function create(int $user_id): int
    {
        $admin = Admin::create(['user_id' => $user_id]);

        return $admin->id;
    }

    public function connectToShop(int $admin_id, int $shop_id): void
    {
        ShopAdmin::create([
            'admin_id' => $admin_id,
            'shop_id' => $shop_id,
            'role' => 'owner',
        ]);
    }
}