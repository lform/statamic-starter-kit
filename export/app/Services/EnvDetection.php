<?php

namespace App\Services;

use Dotenv\Dotenv;
use Illuminate\Foundation\Application;

class EnvDetection
{
	public static function boot(Application $app, array $environmentHosts = [])
	{


		$hostname = gethostname();
		$siteRoot = rtrim(base_path(), '/ ');

		// Load the default environment file: .env
		Dotenv::createMutable($siteRoot)->load();

		// Check for environment files based on hostname or project-root path
		// If detected, this will override the default environment file values
		// Based on the pattern: .env.{env_name}
		foreach ($environmentHosts as $environmentName => $hostsOrPaths) {
			foreach ($hostsOrPaths as $entry) {
				if (
					file_exists($siteRoot.'/.env.'.$environmentName)
					&& (fnmatch($entry, $siteRoot) || fnmatch($entry, $hostname))
				) {
					Dotenv::createMutable($siteRoot, ['.env.'.$environmentName])->load();
				}
			}
		}

		return $app;
	}
}
