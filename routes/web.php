<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/test', 'TestPage')->name('test');
Route::inertia('/about', 'AboutPage')->name('about');

Route::inertia('/shops', 'shops/Index')->name('shops-list');
Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
Route::inertia('/settings', 'Settings')->name('settings');

