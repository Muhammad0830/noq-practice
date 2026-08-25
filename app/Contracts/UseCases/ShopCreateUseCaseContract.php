<?php

namespace App\Contracts\UseCases;

use App\DTOs\Input\ShopCreateDTO;

interface ShopCreateUseCaseContract
{
    public function execute(ShopCreateDTO $data): int|null;
}