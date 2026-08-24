<?php

namespace App\Contracts\UseCases;

use App\DTOs\ShopCreateDTO;

interface ShopCreateUseCaseContract
{
    public function execute(ShopCreateDTO $data): int|null;
}