<?php

namespace App\Providers;

use App\Contracts\Services\AdminServiceContract;
use App\Contracts\Services\AuthServiceContract;
use App\Contracts\Services\ServicesServiceContract;
use App\Contracts\Services\ShopServiceContract;
use App\Services\AdminService;
use App\Services\AuthService;
use App\Services\ServicesService;
use App\Services\ShopService;
use Illuminate\Support\ServiceProvider;

class ServicesProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            AuthServiceContract::class,
            AuthService::class
        );

        $this->app->bind(
            ShopServiceContract::class,
            ShopService::class
        );

        $this->app->bind(
            ServicesServiceContract::class,
            ServicesService::class
        );

        $this->app->bind(
            AdminServiceContract::class,
            AdminService::class,
        );
    }
}