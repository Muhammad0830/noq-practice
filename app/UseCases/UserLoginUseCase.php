<?php

namespace App\UseCases;

use App\Contracts\Services\AuthServiceContract;
use App\Contracts\UseCases\UserLoginUseCaseContract;
use App\DTOs\Input\UserLoginDTO;
use Illuminate\Validation\ValidationException;

class UserLoginUseCase implements UserLoginUseCaseContract
{
    public function __construct(
        private AuthServiceContract $service,
    ) {
    }

    public function execute(UserLoginDTO $dto): void
    {
        $loginSuccessfull = $this->service->login($dto);

        if (!$loginSuccessfull) {
            throw ValidationException::withMessages([
                'email' => 'Email or Password is incorrect',
            ]);
        }
    }
}