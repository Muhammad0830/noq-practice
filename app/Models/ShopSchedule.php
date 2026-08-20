<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShopSchedule extends Model
{
    protected $fillable = [
        'shop_id',
        'day_of_week',
        'start_time',
        'end_time',
        'type',
    ];
}
