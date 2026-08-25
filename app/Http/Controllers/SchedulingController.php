<?php

namespace App\Http\Controllers;

use App\Contracts\Services\SchedulingServiceContract;
use App\Models\Shop;
use Inertia\Inertia;
use Inertia\Response;

class SchedulingController extends Controller
{
    public function schedulingPage(Shop $shop, SchedulingServiceContract $service): Response
    {
        $filteredSchedules = $service->getWeeksSchedule($shop->id);

        return Inertia::render('Admin/Scheduling/Index', [
            'scheduling' => $filteredSchedules,
        ]);
    }
}