<?php

namespace App\Contracts\Services;

use App\DTOs\SchedulingDTO;
use App\DTOs\ShopDefinitionDTO;

interface ShopServiceContract
{
    public function create(ShopDefinitionDTO $dto): int;

    public function addSchedules(SchedulingDTO $dto, int $shop_id): void;
}