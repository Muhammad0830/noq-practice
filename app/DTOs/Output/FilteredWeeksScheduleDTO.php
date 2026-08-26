<?php

namespace App\DTOs\Output;

class FilteredWeeksScheduleDTO
{
    public function __construct(
        public readonly array $monday,
        public readonly array $tuesday,
        public readonly array $wednesday,
        public readonly array $thursday,
        public readonly array $friday,
        public readonly array $saturday,
        public readonly array $sunday,
    ) {
    }

    public static function fromArray(array $all): self
    {
        $openTimes = array_filter($all, function ($schedule) {
            return $schedule['type'] === 'open';
        });

        $closedTimes = array_filter($all, function ($schedule) {
            return $schedule['type'] === 'closed';
        });

        return new self(
            monday: self::filterSchedules($openTimes, $closedTimes, 'monday'),
            tuesday: self::filterSchedules($openTimes, $closedTimes, 'tuesday'),
            wednesday: self::filterSchedules($openTimes, $closedTimes, 'wednesday'),
            thursday: self::filterSchedules($openTimes, $closedTimes, 'thursday'),
            friday: self::filterSchedules($openTimes, $closedTimes, 'friday'),
            saturday: self::filterSchedules($openTimes, $closedTimes, 'saturday'),
            sunday: self::filterSchedules($openTimes, $closedTimes, 'sunday'),
        );
    }

    private static function filterSchedules(
        array $openTimes,
        array $closedTimes,
        string $day
    ): array {
        $openArray = array_filter(
            $openTimes,
            fn($schedule) => $schedule['day_of_week'] === $day
        );

        return [
            'open' => $openArray[array_key_first($openArray)] ?? null,

            'closed' => array_values(array_filter(
                $closedTimes,
                fn($schedule) => $schedule['day_of_week'] === $day
            )),
        ];
    }
}