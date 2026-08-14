<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Controller;
use Throwable;

class AuthController extends Controller
{
    public function login(LoginRequest $request): mixed
    {
        try {
            $data = $request->validated();

            $loginSuccessfull = Auth::guard('users')->attempt([
                'email' => $data['email'],
                'password' => $data['password'],
            ]);

            if (!$loginSuccessfull) {
                return redirect()->back()->with('error', 'Email or Password is incorrect.');
            }

            $request->session()->regenerate();

            return redirect()->route('dashboard')->with('success', 'Logged bowqain successfully');
        } catch (Throwable $e) {
            return redirect()->back()->with('error', 'Failed to Login, Please try again.');
        }
    }

    public function register(RegisterRequest $request): mixed
    {
        try {
            $data = $request->validated();

            $user = User::create($data);

            if (!$user && !$user->id) {
                return redirect()->back()->with('error', 'Email or Password is incorrect.');
            }

            return redirect()->route('dashboard')->with('success', 'Logged in successfully');
        } catch (Throwable $e) {
            return redirect()->back()->with('error', 'Failed to Login, Please try again.');
        }
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('users')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login-page');
    }
}