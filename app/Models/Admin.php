<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable;

    public $fillable = [
        'user_id',
    ];

    public function shops()
    {
        return $this->belongsToMany(
            Shop::class,
            'shop_admins',
            'admin_id',
            'shop_id'
        )->withPivot('role');
    }
}
