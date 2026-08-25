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

        return Inertia::render('Admin/Dashboard/Index', [
            'data' => $data,
            'shop_id' => $shop->id,
        ]);
    }
}