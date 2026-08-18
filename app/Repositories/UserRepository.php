<?php

namespace App\Repositories;

use App\Contracts\Repositories\UserRepositoryContract;
use App\DTOs\UserRegisterDTO;
use App\Models\User;

class UserRepository implements UserRepositoryContract
{
    public function create(UserRegisterDTO $dto): User
    {
        return User::create([
            'name' => $dto->name,
            'email' => $dto->email,
            'password' => $dto->password,
        ]);
    }
}