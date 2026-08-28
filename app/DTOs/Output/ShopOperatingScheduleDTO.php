<?php

namespace App\DTOs\Output;

class ShopOperatingScheduleDTO
{
    public function __construct(
        public readonly string $open_time,
        public readonly string $close_time,
        public readonly array $breaks,
        public readonly array $available,
        public readonly array $booked,
    ){}
}