<?php

namespace App\Contracts\Services;

use App\DTOs\UserLoginDTO;

interface AuthServiceContract
{
    public function login(UserLoginDTO $dto): bool;
}