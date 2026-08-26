<?php

namespace App\Http\Controllers;

use App\Contracts\Services\SchedulingServiceContract;
use App\DTOs\Input\SchedulingDTO;
use App\Http\Requests\SchedulingRequest;
use App\Models\Shop;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class SchedulingController extends Controller
{
    public function schedulingPage(Shop $shop, SchedulingServiceContract $service): Response
    {
        $filteredSchedules = $service->getWeeksSchedule($shop->id);

        return Inertia::render('Admin/Scheduling/Index', [
            'scheduling' => $filteredSchedules,
        ]);
    }

    public function schedulingUpdate(Shop $shop, SchedulingRequest $request, SchedulingServiceContract $service): RedirectResponse
    {
        try {
            $data = $request->validated();

            $dto = SchedulingDTO::fromArray($data['scheduling']);

            $service->updateSchedules($dto, $shop->id);

            return back()->with('message', 'Scheduling updated successfully!');
        } catch (Throwable $e) {
            return back()->with('message', "Scheduling update failed, {$e}");
        }
    }
}