<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\GetOneDayScheduleUseCaseContract;
use App\Enums\WeekDaysEnum;
use App\Models\Service;
use App\Models\Shop;
use App\Models\ShopSchedule;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class BookingController extends Controller
{
    public function bookPage(Shop $shop, Service $service, GetOneDayScheduleUseCaseContract $useCase): Response
    {
        $today = now();

        $scheduling = $useCase->execute($shop->id, $service->id, $service->duration_min, $today);

        return Inertia::render('User/Booking/Index', [
            'shop' => $shop,
            'service' => $service,
            'scheduling' => $scheduling,
        ]);
    }

    public function createBooking(Shop $shop, Service $service): RedirectResponse
    {
        try {
            return redirect()->route('User/History/Index')->with('message', 'Booking created successfully!');
        } catch (Throwable $e) {
            Log::error('Service update failed', [
                'shop_id' => $shop->id,
                'service_id' => $service->id,
                'message' => $e->getMessage(),
                'exception' => $e,
            ]);

            return redirect()->back()->with('message', 'Booking failed.');
        }
    }
}