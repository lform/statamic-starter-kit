<?php

/*
|--------------------------------------------------------------------------
| Detect The Application Environment
|--------------------------------------------------------------------------
|
| The system will load the .env files by default, and then check for
| an environment-specific file (example: .env.local) based on the hostname or
| project-root path. This allows the environment values to be overridden
| without having to repeat them.
|
| There are two strategies for detecting the application environment:
| 1. Hostname detection
| 2. Project-root path detection
|
| Hostname detection is the default strategy, and also accepts wildcards.
|
| The project-root path detection is useful when you are deploying to a server
| that is hosting both a staging and live version of a site.
|
*/

return [
	'local' => [
		'lform-server',
		'*.local',
		'DESKTOP-*',
		'*.home',
		'homestead',
		'LFORM',
		'*.lan',
		'lformdev',
	],
	//    'staging' => [
	//        '/home/forge/ {Change me to staging site} .lform.dev',
	//    ],
];
