<?php

use App\Http\Controllers\AdminAnalyticsController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\SchedulingController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ShopsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/about', 'AboutPage')->name('about');

    Route::inertia('/dashboard', 'User/Dashboard')->name('dashboard');
    Route::inertia('/settings', 'User/Settings')->name('settings');
    Route::inertia('/profile', 'Profile')->name('profile');

    Route::get('/create-shop', [ShopsController::class, 'createPage'])->name('create-shop-page');
    Route::get('/shops/list', [ShopsController::class, 'getAll'])->name('shops-list');
    Route::get('/shops/{shop}/view', [ShopsController::class, 'getOne'])->name('shop-view');
    Route::get('/services', [ServicesController::class, 'getAll'])->name('services');
    Route::get('/favourites', [ServicesController::class, 'getAll'])->name('favourites');
    Route::get('/shop/{shop}/service/{service}/book/schedule', [SchedulingController::class, 'schedulingPage']);

    Route::get('/shop/{shop}/service/{service}/book', [SchedulingController::class, 'bookingSchedule'])->name('book-page');

    Route::post('/create-shop', [ShopsController::class, 'createShop'])->name('create-shop');
    Route::post('/shop/{shop}/service/{service}/book', [BookingController::class, 'createBooking'])->name('create-booking');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware(['auth', 'admin'])->prefix('admin/shop/{shop}')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'dashboardPage'])->name('admin-dashboard');
    Route::get('/analytics', [AdminAnalyticsController::class, 'analyticsPage'])->name('admin-analytics');
    Route::get('/scheduling', [SchedulingController::class, 'schedulingPage'])->name('admin-scheduling-page');

    Route::get('/service/list', [ServicesController::class, 'list'])->name('admin-service-list');
    Route::get('/service/create', [ServicesController::class, 'createServicesPage'])->name('admin-service-create-page');
    Route::get('/service/{service}/edit', [ServicesController::class, 'editPage'])->name('admin-service-edit-page');
    Route::put('/service/{service}/edit/toggleActive', [ServicesController::class, 'toggleActive'])->name('admin-service-toggle-active');
    Route::put('/service/{service}/edit', [ServicesController::class, 'editService'])->name('admin-service-edit');
    Route::put('/scheduling/edit', [SchedulingController::class, 'schedulingUpdate'])->name('admin-scheduling-edit');

    Route::post('/service/create', [ServicesController::class, 'createServices'])->name('admin-service-create');
});

Route::inertia('/auth/login', 'Auth/Login')->name('login-page');
Route::inertia('/auth/register', 'Auth/Register')->name('register-page');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
