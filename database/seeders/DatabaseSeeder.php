<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Service;
use App\Models\Shop;
use App\Models\ShopAdmin;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admins = Admin::factory()
            ->count(5)
            ->create();

        $shops = Shop::factory()
            ->count(5)
            ->create();

        foreach ($shops as $index => $shop) {
            $admin = $admins[$index];

            ShopAdmin::create([
                'shop_id' => $shop->id,
                'admin_id' => $admin->id,
                'role' => 'owner',
            ]);

            Service::factory()
                ->count(5)
                ->for($shop)
                ->create();
        }

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
