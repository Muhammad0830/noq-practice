<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;

Route::inertia('/todo', 'TodoPage')->name('todo');
Route::inertia('/about', 'AboutPage')->name('about');

Route::inertia('/shops', 'shops/Index')->name('shops-list');
Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
Route::inertia('/settings', 'Settings')->name('settings');
Route::inertia('/profile', 'Profile')->name('profile');

Route::inertia('/auth/login', 'auth/Login')->name('login-page');
Route::inertia('/auth/register', 'auth/Register')->name('register-page');
Route::inertia('/services', [ServicesController::class, 'getAll'])->name('servcies');
Route::inertia('/favourites', [ServicesController::class, 'getAll'])->name('favourites');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
