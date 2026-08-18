<?php

namespace App\Http\Controllers;

use App\Contracts\Repositories\ShopRepositoryContract;
use Inertia\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ShopsController extends Controller
{
    public function getAll(ShopRepositoryContract $repository): Response
    {
        $shops = $repository->getAll();

        return Inertia::render('user/shops/Index', [
            'data' => $shops,
        ]);
    }

    public function getOne(string $shopId, ShopRepositoryContract $repository): Response
    {
        $shop = $repository->find($shopId);

        return Inertia::render('user/shops/View', [
            'data' => $shop
        ]);
    }
}