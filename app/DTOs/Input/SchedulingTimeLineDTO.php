<?php

namespace App\DTOs\Input;

use Illuminate\Support\Facades\Log;

class SchedulingTimelineDTO
{
    public function __construct(
        public readonly string $id,
        public readonly string $shop_id,
        public readonly string $day_of_week,
        public readonly string $start_time,
        public readonly string $end_time,
        public readonly string $type,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            id: $data['id'],
            shop_id: $data['shop_id'],
            day_of_week: $data['day_of_week'],
            start_time: $data['start_time'],
            end_time: $data['end_time'],
            type: $data['type'],
        );
    }
}