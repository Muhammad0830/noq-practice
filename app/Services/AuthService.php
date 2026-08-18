<?php

namespace App\Services;

use App\Contracts\Services\AuthServiceContract;
use App\DTOs\UserLoginDTO;
use Illuminate\Support\Facades\Auth;

class AuthService implements AuthServiceContract
{
    public function login(UserLoginDTO $dto): bool
    {
        return Auth::guard('users')->attempt([
            'email' => $dto->email,
            'password' => $dto->password,
        ]);
    }
}