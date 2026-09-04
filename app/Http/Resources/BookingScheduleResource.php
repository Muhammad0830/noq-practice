<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingScheduleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'open_time' => $this->open_time,
            'close_time' => $this->close_time,
            'breaks' => array_map(fn($time) => ([
                'start_time' => $time['start_time']?->format('H:i'),
                'end_time' => $time['end_time']?->format('H:i')
            ]), $this->breaks),
            'available' => $this->available,
            'bookings' => array_map(fn($time) => ([
                'start_time' => $time['start_time']?->format('H:i'),
                'end_time' => $time['end_time']?->format('H:i')
            ]), $this->bookings),
        ];
    }
}
