<?php

namespace App\Contracts\Repositories;

use App\DTOs\ShopDefinitionDTO;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Collection;

interface ShopRepositoryContract
{
    public function getAll(): Collection;

    public function find(string $id): Shop;

    public function create(ShopDefinitionDTO $dto): int;
}