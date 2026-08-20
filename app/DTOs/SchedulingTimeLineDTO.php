<?php

namespace App\DTOs;

class SchedulingTimelineDTO
{
    public function __construct(
        public readonly string $id,
        public readonly string $dayOfWeek,
        public readonly string $startTime,
        public readonly string $endTime,
        public readonly string $type,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            id: $data['id'],
            dayOfWeek: $data['dayOfWeek'],
            startTime: $data['startTime'],
            endTime: $data['endTime'],
            type: $data['type'],
        );
    }
}