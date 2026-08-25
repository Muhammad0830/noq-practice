<?php

namespace App\Contracts\UseCases;

use App\DTOs\Input\UserLoginDTO;

interface UserLoginUseCaseContract
{
    public function execute(UserLoginDTO $dto): void;
}