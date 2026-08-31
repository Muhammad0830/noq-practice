<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Shop;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Throwable;

class BookingController extends Controller
{
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