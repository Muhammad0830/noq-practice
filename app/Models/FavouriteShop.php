<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FavouriteShop extends Model
{
    protected $fillable = [
        'user_id',
        'shop_id',
    ];
}
