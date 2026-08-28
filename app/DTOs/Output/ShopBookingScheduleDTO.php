<?php

namespace App\DTOs\Output;

class ShopBookingScheduleDTO
{
    public function __construct(
        public readonly array $bookings
    ){}
}