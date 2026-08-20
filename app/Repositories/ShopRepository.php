<?php

namespace App\Repositories;

use App\Contracts\Repositories\ShopRepositoryContract;
use App\DTOs\ShopDefinitionDTO;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Log;

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

    public function create(ShopDefinitionDTO $dto): int
    {
        Log::info($dto->address);
        $shop = Shop::create([
            'name' => $dto->name,
            'category_id' => $dto->category_id,
            'phone_number' => $dto->phone_number,
            'address' => $dto->address,
            'description' => $dto->description,
        ]);

        return $shop->id;
    }
}