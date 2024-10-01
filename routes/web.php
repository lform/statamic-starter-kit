<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RobotsController;

// Statamic Routes

// Laravel Routes

// LFORM Routes - Do not alter, custom routes above.
Route::get('/robots.txt', [RobotsController::class, 'robots']);
