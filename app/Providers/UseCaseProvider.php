<?php

namespace App\Providers;

use App\Contracts\UseCases\UserRegisterUseCaseContract;
use App\UseCases\UserRegisterUseCase;
use Illuminate\Support\ServiceProvider;
use App\UseCases\UserLoginUseCase;
use App\Contracts\UseCases\UserLoginUseCaseContract;

class UseCaseProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            UserLoginUseCaseContract::class,
            UserLoginUseCase::class
        );

        $this->app->bind(
            UserRegisterUseCaseContract::class,
            UserRegisterUseCase::class
        );
    }
}