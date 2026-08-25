<?php

namespace App\Contracts\UseCases;

use App\DTOs\Input\UserRegisterDTO;

interface UserRegisterUseCaseContract
{
    public function execute(UserRegisterDTO $dto): bool;
}