<?php

namespace App\Contracts\Repositories;

use App\Models\Shop;
use Illuminate\Database\Eloquent\Collection;

interface ShopRepositoryContract
{
    public function getAll(): Collection;

    public function find(string $id): Shop;
}