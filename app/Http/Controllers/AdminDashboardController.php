<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController
{
    public function dashboardPage(Shop $shop): Response
    {
        $data = [];

        return Inertia::render('admin/Dashboard', [
            'data' => $data,
            'shop_id' => $shop->id,
        ]);
    }
}