<?php

namespace App\Enums;

enum WeekDaysEnum: int
{
    case MONDAY = 0;
    case TUESDAY = 1;
    case WEDNESDAY = 2;
    case THURSDAY = 3;
    case FRIDAY = 4;
    case SATURDAY = 5;
    case SUNDAY = 6;

    public static function getDayName(int $num): string
    {
        return self::tryFrom($num)?->name
            ? strtolower(self::tryFrom($num)->name)
            : 'unknown';
    }

    public static function getToday(): string
    {
        $today = now();

        return self::getDayName($today->weekday() - 1);
    }
}