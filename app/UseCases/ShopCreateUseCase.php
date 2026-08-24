<?php

namespace App\UseCases;

use App\Contracts\Services\AdminServiceContract;
use App\Contracts\Services\ServicesServiceContract;
use App\Contracts\Services\ShopServiceContract;
use App\Contracts\UseCases\ShopCreateUseCaseContract;
use App\DTOs\ShopCreateDTO;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ShopCreateUseCase implements ShopCreateUseCaseContract
{
    public function __construct(
        private ShopServiceContract $shopService,
        private ServicesServiceContract $servicesService,
        private AdminServiceContract $adminService,
    ) {
    }

    public function execute(ShopCreateDTO $dto): int|null
    {
        return DB::transaction(function () use ($dto) {
            if (!Auth::guard('users')->check()) {
                return null;
            }

            $shop_id = $this->shopService->create($dto->definitionDTO);

            $this->shopService->addSchedules($dto->schedulingDTO, $shop_id);

            $this->servicesService->create($dto->servicesDTO, $shop_id);

            if (!Auth::guard('users')->user()->admin) {
                $user_id = Auth::guard('users')->user()->id;

                $admin_id = $this->adminService->create($user_id);
            } else {
                $admin_id = Auth::guard('users')->user()->admin->id;
            }

            $this->adminService->connectToShop($admin_id, $shop_id);

            return $shop_id;
        });
    }
}