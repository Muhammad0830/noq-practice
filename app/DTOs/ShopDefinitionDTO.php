<?php

namespace App\DTOs;

class ShopDefinitionDTO
{
    public function __construct(
        public readonly string $name,
        public readonly ?string $description,
        public readonly string $address,
        public readonly int $category_id,
        public readonly string $phone_number,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            name: $data['name'],
            description: $data['description'] ?? null,
            address: $data['address'],
            category_id: $data['category'],
            phone_number: $data['phone']
        );
    }
}