<?php

namespace App\Contracts\UseCases;

use App\DTOs\UserLoginDTO;

interface UserLoginUseCaseContract
{
    public function execute(UserLoginDTO $dto): void;
}