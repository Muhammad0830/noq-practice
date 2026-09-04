<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;


class HistoryController extends Controller
{
    public function index(): Response
    {
        $histories = [];

        return Inertia::render('User/History/Index', [
            'histories' => $histories
        ]);
    }
}