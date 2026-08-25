<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use Inertia\Response;

class AdminAnalyticsController extends Controller
{
    public function analyticsPage(Shop $shop): Response
    {
        return Inertia::render('Admin/Analytics/Index');
    }
}