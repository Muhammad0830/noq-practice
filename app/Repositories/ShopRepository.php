<?php

namespace App\Repositories;

use App\Contracts\Repositories\ShopRepositoryContract;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Collection;

class ShopRepository implements ShopRepositoryContract
{
    public function getAll(): Collection
    {
        return Shop::get();
    }

    public function find(string $id): Shop
    {
        return Shop::with('services')->find($id);
    }
}