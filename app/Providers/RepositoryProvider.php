<?php

namespace App\Providers;

use App\Contracts\Repositories\ShopRepositoryContract;
use App\Contracts\Repositories\UserRepositoryContract;
use App\Repositories\ShopRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            ShopRepositoryContract::class,
            ShopRepository::class
        );

        $this->app->bind(
            UserRepositoryContract::class,
            UserRepository::class
        );
    }
}