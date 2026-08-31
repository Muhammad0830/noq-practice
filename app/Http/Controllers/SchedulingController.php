<?php

namespace App\Http\Controllers;

use App\Contracts\Services\SchedulingServiceContract;
use App\Contracts\UseCases\GetOneDayScheduleUseCaseContract;
use App\DTOs\Input\SchedulingDTO;
use App\Enums\WeekDaysEnum;
use App\Http\Requests\SchedulingRequest;
use App\Models\Service;
use App\Models\Shop;
use App\Models\ShopSchedule;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
            'scheduling' => $filteredSchedules
        ]);
    }

    public function bookingSchedule(
        Shop $shop,
        Service $service,
        GetOneDayScheduleUseCaseContract $useCase,
        Request $request
    ): Response {
        $carbonDate = $request->query('date')
            ? Carbon::parse($request->query('date'))
            : now();

        $scheduling = $useCase->execute(
            $shop->id,
            $service->id,
            $service->duration_min,
            $service->buffer_time,
            $carbonDate
        );

        return Inertia::render('User/Booking/Index', [
            'shop' => $shop,
            'service' => $service,
            'date' => $carbonDate->toDateString(),
            'scheduling' => $scheduling,
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