<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\ShopCreateUseCaseContract;
use App\DTOs\ShopCreateDTO;
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

    public function createPage(Request $request): Response
    {
        $step = $request->query('step', 'shop-definition');
        $categories = ShopCategory::get()->toArray();

        return Inertia::render('CreateShop', [
            'step' => $step,
            'categories' => $categories,
        ]);
    }

    public function createShop(CreateShopRequest $request, ShopCreateUseCaseContract $useCase)
    {
        $validated = $request->validated();

        $dto = ShopCreateDTO::fromRequest($validated);

        $useCase->execute($dto);

        return redirect()->route('admin_dashboard');
    }
}