<?php

use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);


Route::get('/robots.txt', [\App\Http\Controllers\SiteController::class, 'robots']);
