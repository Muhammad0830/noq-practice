<?php

namespace App\DTOs\Input;

class ServiceUpdateDTO
{
    public function __construct(
        public readonly int $id,
        public readonly int $shop_id,
        public readonly string $name,
        public readonly ?string $description,
        public readonly int $price,
        public readonly int $duration_min,
        public readonly bool $is_active,
        public readonly ?int $buffer_time
    ) {
    }

    public static function fromArray(array $data): self
    {
        $self = new self(
            id: $data['id'],
            shop_id: $data['shop_id'],
            name: $data['name'],
            description: $data['description'],
            price: $data['price'],
            duration_min: $data['duration_min'],
            is_active: $data['is_active'],
            buffer_time: $data['buffer_time'],
        );

        return $self;
    }
}