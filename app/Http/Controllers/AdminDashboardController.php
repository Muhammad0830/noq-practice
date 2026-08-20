<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController
{
    public function dashboardPage(): Response
    {
        $data = [];

        return Inertia::render('admin/Dashboard', [
            'data' => $data,
        ]);
    }
}