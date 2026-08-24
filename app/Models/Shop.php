<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'description',
        'address',
        'phone_number'
    ];

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function admins()
    {
        return $this->belongsToMany(
            Admin::class,
            'shop_admins',
            'shop_id',
            'admin_id'
        )->withPivot('role');
    }
}