<?php

namespace App\DTOs\Input;

class BookingCreateDTO
{
    public function __construct(
        public readonly int $shop_id,
        public readonly int $service_id,
        public readonly string $date,
    ){}

    public static function fromArray(array $data): self
    {
        return new self(
            shop_id: $data['shop_id'],
            service_id: $data['service_id'],
            date: $data['date'],
        );
    }
}