<?php

namespace App\Providers;

use App\Contracts\Services\AuthServiceContract;
use App\Services\AuthService;
use Illuminate\Support\ServiceProvider;

class ServicesProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            AuthServiceContract::class,
            AuthService::class
        );
    }
}