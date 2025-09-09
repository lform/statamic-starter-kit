<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\{Exceptions, Middleware};
use App\Services\EnvDetection;

$app = Application::configure(basePath: dirname(__DIR__))
	->withRouting(
		web: __DIR__.'/../routes/web.php',
		commands: __DIR__.'/../routes/console.php',
		health: '/up',
	)
	->withMiddleware(function (Middleware $middleware) {})
	->withExceptions(function (Exceptions $exceptions) {})->create();

$environmentHosts = require __DIR__.'/environment.php';

return EnvDetection::boot($app, $environmentHosts);
