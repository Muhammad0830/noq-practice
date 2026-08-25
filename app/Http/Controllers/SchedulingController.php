<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use Inertia\Response;

class SchedulingController extends Controller
{
    public function schedulingPage(Shop $shop): Response
    {
        return Inertia::render('Admin/Scheduling/Index');
    }
}