<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ShopsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/todo', 'TodoPage')->name('todo');
    Route::inertia('/about', 'AboutPage')->name('about');

    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::inertia('/settings', 'Settings')->name('settings');
    Route::inertia('/profile', 'Profile')->name('profile');

    Route::get('/create-shop', [ShopsController::class, 'createPage'])->name('create-shop-page');
    Route::get('/shops', [ShopsController::class, 'getAll'])->name('shops-list');
    Route::get('/shops/{shop}/view', [ShopsController::class, 'getOne'])->name('shop-view');
    Route::get('/services', [ServicesController::class, 'getAll'])->name('servcies');
    Route::get('/favourites', [ServicesController::class, 'getAll'])->name('favourites');

    Route::post('/create-shop', [ShopsController::class, 'createShop'])->name('create-shop');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'dashboardPage'])->name('admin_dashboard');
});
Route::inertia('/auth/login', 'auth/Login')->name('login-page');
Route::inertia('/auth/register', 'auth/Register')->name('register-page');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
