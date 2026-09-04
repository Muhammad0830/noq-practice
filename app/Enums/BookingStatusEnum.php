<?php

namespace App\Enums;

enum BookingStatusEnum: string
{
    case PENDING = 'pending';
    case CONFIRMED = 'confirmed';
    case COMPLETED = 'completed';
    case INPROGRESS = 'in_progress';
    case CANCELLED = 'cancelled';
    case NOSHOW = 'no_show';
}