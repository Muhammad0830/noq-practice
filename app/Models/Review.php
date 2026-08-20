<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'user_id',
        'shop_id',
        'service_id',
        'rating',
        'comment',
    ];
}
