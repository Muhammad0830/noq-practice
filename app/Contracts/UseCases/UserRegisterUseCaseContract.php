<?php

namespace App\Contracts\UseCases;

use App\DTOs\UserRegisterDTO;

interface UserRegisterUseCaseContract
{
    public function execute(UserRegisterDTO $dto): bool;
}