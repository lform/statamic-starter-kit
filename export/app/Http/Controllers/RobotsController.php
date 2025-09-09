<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Statamic\Facades\GlobalSet;

class RobotsController extends Controller
{
	public function robots(): Response
	{
		$set = GlobalSet::find('global_site');

		return response($set->inCurrentSite()->get('robots_txt'), 200)
			->header('Content-Type', 'text/plain');
	}
}
