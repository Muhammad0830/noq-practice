<?php

namespace Database\Factories;

use App\Models\Admin;
use App\Models\Model;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShopAdminFactory extends Factory
{
    protected $model = ShopAdmin::class;

    public function definition(): array
    {
        return [
            'shop_id' => Shop::factory(),
            'admin_id' => Admin::factory(),
            'role' => fake()->randomElement(['owner', 'staff']),
        ];
    }
}
