<?php

namespace App\Contracts\Services;

use App\DTOs\Input\SchedulingDTO;
use App\DTOs\Input\ShopDefinitionDTO;

interface ShopServiceContract
{
    public function create(ShopDefinitionDTO $dto): int;

    public function addSchedules(SchedulingDTO $dto, int $shop_id): void;
}