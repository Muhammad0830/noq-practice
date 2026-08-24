<?php

namespace App\Http\Controllers;

use App\Contracts\Services\ServicesServiceContract;
use App\DTOs\ServiceDTO;
use App\Http\Requests\CreateServiceRequest;
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

        return Inertia::render('user/PopularServices', [
            'data' => $services,
        ]);
    }

    public function createServicesPage(Shop $shop): Response
    {
        return Inertia::render('admin/services/Create', [
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
        $services = Service::get();

        return Inertia::render('admin/services/List', [
            'services' => $services,
            'shop_id' => $shop->id,
        ]);
    }

    public function editPage(Service $service, Request $request): Response
    {
        return Inertia::render('admin/services/Edit', [
            'service' => $service,
        ]);
    }

    public function toggleActive(Service $service, Request $request)
    {
        return back()->with('message', "{$service->name} updated successfully");
    }
}