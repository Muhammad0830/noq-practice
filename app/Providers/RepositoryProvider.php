<?php

namespace App\Providers;

use App\Contracts\Repositories\AdminRepositoryContract;
use App\Contracts\Repositories\ServicesRepositoryContract;
use App\Contracts\Repositories\ShopRepositoryContract;
use App\Contracts\Repositories\ShopScheduleRepositoryContract;
use App\Contracts\Repositories\UserRepositoryContract;
use App\Repositories\AdminRepository;
use App\Repositories\ServicesRepository;
use App\Repositories\ShopRepository;
use App\Repositories\ShopScheduleRepository;
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

        $this->app->bind(
            ShopScheduleRepositoryContract::class,
            ShopScheduleRepository::class
        );

        $this->app->bind(
            ServicesRepositoryContract::class,
            ServicesRepository::class,
        );

        $this->app->bind(
            AdminRepositoryContract::class,
            AdminRepository::class,
        );
    }
}