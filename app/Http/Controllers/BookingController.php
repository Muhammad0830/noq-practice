<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\BookingCreateUseCaseContract;
use App\DTOs\Input\BookingCreateDTO;
use App\Http\Requests\BookingCreateRequest;
use App\Models\Service;
use App\Models\Shop;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Throwable;

class BookingController extends Controller
{
    public function createBooking(
        Shop $shop,
        Service $service,
        BookingCreateRequest $request,
        BookingCreateUseCaseContract $useCase
    ): RedirectResponse {
        try {
            $validated = $request->validated();

            $dto = BookingCreateDTO::fromArray($validated);

            $user = Auth::guard('users')->user();

            $useCase->execute($dto, $service, $user->id);

            return redirect()->route('history.index')->with('message', 'Booking created successfully!');
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