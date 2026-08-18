<?php

namespace App\Providers;

use App\Contracts\Repositories\ShopRepositoryContract;
use App\Repositories\ShopRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            ShopRepositoryContract::class,
            ShopRepository::class
        );
    }
}