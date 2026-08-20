<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShopScheduleBlock extends Model
{
    protected $fillable = [
        'shop_id',
        'start_time',
        'end_time',
        'reason',
    ];
}
