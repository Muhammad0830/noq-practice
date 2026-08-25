<?php

namespace App\DTOs\Input;

class ServiceDTO
{
    public function __construct(
        public readonly string $name,
        public readonly int $duration_min,
        public readonly float $price,
        public readonly ?int $buffer_time = null,
        public readonly ?string $description = null,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            name: $data['name'],
            duration_min: (int) $data['duration_min'],
            price: (float) $data['price'],
            buffer_time: isset($data['buffer_time']) ? (int) $data['buffer_time'] : null,
            description: $data['description'] ?? null,
        );
    }
}