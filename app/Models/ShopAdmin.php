<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopAdmin extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id',
        'admin_id',
        'role',
    ];
}
