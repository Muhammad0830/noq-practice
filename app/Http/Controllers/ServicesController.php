<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    public function getAll(): Response
    {
        $services = Service::get();

        return Inertia::render('user/PopularServices', [
            'data' => $services,
        ]);
    }
}