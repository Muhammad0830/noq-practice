<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\UserRegisterUseCaseContract;
use App\Contracts\UseCases\UserLoginUseCaseContract;
use App\DTOs\UserLoginDTO;
use App\DTOs\UserRegisterDTO;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Controller;
use Exception;
use Throwable;

class AuthController extends Controller
{
    public function login(LoginRequest $request, UserLoginUseCaseContract $useCase): mixed
    {
        try {
            $data = $request->validated();

            $useCase->execute(new UserLoginDTO(
                email: $data['email'],
                password: $data['password'],
            ));

            $request->session()->regenerate();

            return redirect()->route('dashboard')->with('success', 'Logged in successfully');
        } catch (Throwable $e) {
            return throw $e;
        }
    }

    public function register(RegisterRequest $request, UserRegisterUseCaseContract $useCase): mixed
    {
        try {
            $data = $request->validated();

            $dto = new UserRegisterDTO(
                name: $data['name'],
                email: $data['email'],
                password: $data['password'],
            );

            $success = $useCase->execute($dto);

            if (!$success) {
                throw new Exception('Cannot register a User, check your credentials and try again.');
            }

            return redirect()->route('dashboard')->with('success', 'Logged in successfully');
        } catch (Throwable $e) {
            return throw $e;
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