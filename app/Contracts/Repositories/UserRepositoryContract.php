<?php

namespace App\Contracts\Repositories;

use App\DTOs\Input\UserRegisterDTO;
use App\Models\User;

interface UserRepositoryContract
{
    public function create(UserRegisterDTO $dto): User;
}