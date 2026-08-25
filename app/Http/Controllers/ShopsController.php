<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\ShopCreateUseCaseContract;
use App\DTOs\Input\ShopCreateDTO;
use App\Http\Requests\CreateShopRequest;
use App\Models\ShopCategory;
use Illuminate\Http\Request;
use App\Contracts\Repositories\ShopRepositoryContract;
use Inertia\Inertia;
use Inertia\Response;

class ShopsController extends Controller
{
    public function getAll(ShopRepositoryContract $repository): Response
    {
        $shops = $repository->getAll();

        return Inertia::render('User/shops/Index', [
            'data' => $shops,
        ]);
    }

    public function getOne(string $shopId, ShopRepositoryContract $repository): Response
    {
        $shop = $repository->find($shopId);

        return Inertia::render('User/shops/View', [
            'data' => $shop
        ]);
    }

    public function createPage(Request $request): Response
    {
        $step = $request->query('step', 'shop-definition');
        $categories = ShopCategory::get()->toArray();

        return Inertia::render('User/CreateShop', [
            'step' => $step,
            'categories' => $categories,
        ]);
    }

    public function createShop(CreateShopRequest $request, ShopCreateUseCaseContract $useCase)
    {
        $validated = $request->validated();

        $dto = ShopCreateDTO::fromRequest($validated);

        $shop_id = $useCase->execute($dto);

        return redirect()->route('admin-dashboard', ['shop' => $shop_id]);
    }
}