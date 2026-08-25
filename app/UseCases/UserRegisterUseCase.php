<?php

namespace App\UseCases;

use App\Contracts\Repositories\UserRepositoryContract;
use App\Contracts\Services\AuthServiceContract;
use App\Contracts\UseCases\UserRegisterUseCaseContract;
use App\DTOs\Input\UserLoginDTO;
use App\DTOs\Input\UserRegisterDTO;

class UserRegisterUseCase implements UserRegisterUseCaseContract
{
    public function __construct(
        private UserRepositoryContract $repository,
        private AuthServiceContract $service,
    ) {
    }

    public function execute(UserRegisterDTO $dto): bool
    {
        $user = $this->repository->create($dto);

        if (!$user) {
            return false;
        }

        $success = $this->service->login(new UserLoginDTO(
            email: $user->email,
            password: $dto->password,
        ));

        if (!$success) {
            return false;
        }

        return true;
    }
}