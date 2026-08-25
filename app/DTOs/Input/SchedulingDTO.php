<?php

namespace App\DTOs\Input;

class SchedulingDTO
{
    public function __construct(
        public readonly SchedulingDayDTO $monday,
        public readonly SchedulingDayDTO $tuesday,
        public readonly SchedulingDayDTO $wednesday,
        public readonly SchedulingDayDTO $thursday,
        public readonly SchedulingDayDTO $friday,
        public readonly SchedulingDayDTO $saturday,
        public readonly SchedulingDayDTO $sunday,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            monday: SchedulingDayDTO::fromArray($data['monday']),
            tuesday: SchedulingDayDTO::fromArray($data['tuesday']),
            wednesday: SchedulingDayDTO::fromArray($data['wednesday']),
            thursday: SchedulingDayDTO::fromArray($data['thursday']),
            friday: SchedulingDayDTO::fromArray($data['friday']),
            saturday: SchedulingDayDTO::fromArray($data['saturday']),
            sunday: SchedulingDayDTO::fromArray($data['sunday']),
        );
    }

    public function asArray(): array
    {
        return [
            'monday' => $this->monday,
            'tuesday' => $this->tuesday,
            'wednesday' => $this->wednesday,
            'thursday' => $this->thursday,
            'friday' => $this->friday,
            'saturday' => $this->saturday,
            'sunday' => $this->sunday,
        ];
    }
}