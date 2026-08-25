<?php

namespace App\Http\Controllers;

use App\Contracts\Services\ServicesServiceContract;
use App\DTOs\ServiceDTO;
use App\DTOs\ServiceUpdateDTO;
use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\ServiceEditRequest;
use App\Models\Service;
use App\Models\Shop;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class ServicesController extends Controller
{
    public function getAll(): Response
    {
        $services = Service::get();

        return Inertia::render('User/PopularServices', [
            'data' => $services,
        ]);
    }

    public function createServicesPage(Shop $shop): Response
    {
        return Inertia::render('Admin/Service/Create', [
            'shop_id' => $shop->id,
        ]);
    }

    public function createServices(Shop $shop, CreateServiceRequest $request, ServicesServiceContract $service): RedirectResponse
    {
        try {
            $data = $request->validated();

            $services = array_map(
                fn(array $service) => ServiceDTO::fromArray($service),
                $data['services'] ?? []
            );

            $service->create($services, $shop->id);

            return redirect()->route('admin-service-list', ['shop' => $shop->id])->with('message', "Services created successfully");
        } catch (Throwable $e) {
            return redirect()->back()->with('message', $e);
        }
    }

    public function list(Shop $shop): Response
    {
        $services = Service::where('shop_id', $shop->id)->get();

        return Inertia::render('Admin/Service/List', [
            'services' => $services,
            'shop_id' => $shop->id,
        ]);
    }

    public function editPage(Shop $shop, Service $service, Request $request): Response
    {
        return Inertia::render('Admin/Service/Edit', [
            'service' => $service,
        ]);
    }

    public function editService(Shop $shop, Service $service, ServiceEditRequest $request, ServicesServiceContract $servicesService): RedirectResponse
    {
        try {
            $data = $request->validated();

            $dto = ServiceUpdateDTO::fromArray($data);

            $servicesService->update($dto);

            return redirect()->route('admin-service-list', ['shop' => $shop->id, 'service' => $service->id])->with('message', "{$service->name} Service updated successfully!");
        } catch (Throwable $e) {
            return back(500, ['shop' => $shop->id, 'service' => $service->id])->with('message', "{$service->name} update failed!, {$e}");
        }
    }

    public function toggleActive(Shop $shop, Service $service, Request $request)
    {
        return back()->with('message', "{$service->name} updated successfully");
    }
}