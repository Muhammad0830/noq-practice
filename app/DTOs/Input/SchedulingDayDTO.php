<?php

namespace App\DTOs\Input;

use Illuminate\Support\Facades\Log;

class SchedulingDayDTO
{
    /**
     * @param SchedulingTimelineDTO[] $items
     */
    public function __construct(
        public readonly SchedulingTimelineDTO $open,
        public readonly array $closed,
        public readonly bool $isOpen,
    ) {
    }

    public static function fromArray(array $data): self
    {
        $closed = array_map(
            fn(array $item) => SchedulingTimelineDTO::fromArray($item),
            $data['closed'] ?? []
        );

        $open = SchedulingTimelineDTO::fromArray($data['open']);

        return new self(
            open: $open,
            closed: $closed,
            isOpen: $data['isOpen'],
        );
    }
}