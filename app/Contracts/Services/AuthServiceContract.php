<?php

namespace App\Contracts\Services;

use App\DTOs\Input\UserLoginDTO;

interface AuthServiceContract
{
    public function login(UserLoginDTO $dto): bool;
}