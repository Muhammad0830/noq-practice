<?php

namespace App\Http\Controllers;

use Inertia\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ShopsController extends Controller
{
    public function getAll(): Response
    {
        $shops = [];

        return Inertia::render('shops/Index', [
            'data' => $shops,
        ]);
    }
}