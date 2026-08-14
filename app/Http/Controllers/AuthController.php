<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Controller;

class AuthController extends Controller
{
    public function logout()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}