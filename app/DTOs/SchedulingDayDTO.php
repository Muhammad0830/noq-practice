<?php

namespace App\DTOs;

class SchedulingDayDTO
{
    /**
     * @param SchedulingTimelineDTO[] $items
     */
    public function __construct(
        public readonly bool $isOpen,
        public readonly array $items,
    ) {
    }

    public static function fromArray(array $data): self
    {
        $items = array_map(
            fn(array $item) => SchedulingTimelineDTO::fromArray($item),
            $data['items'] ?? []
        );

        return new self(
            isOpen: (bool) ($data['isOpen'] ?? true),
            items: $items
        );
    }
}