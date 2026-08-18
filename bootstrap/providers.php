<?php

use App\Providers\AppServiceProvider;
use App\Providers\RepositoryProvider;
use App\Providers\ServicesProvider;
use App\Providers\UseCaseProvider;

return [
    AppServiceProvider::class,
    RepositoryProvider::class,
    UseCaseProvider::class,
    ServicesProvider::class,
];
