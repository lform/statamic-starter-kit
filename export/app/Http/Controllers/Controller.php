<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Statamic\View\View;

class Controller extends BaseController
{
	use AuthorizesRequests;
	use ValidatesRequests;

	protected array $bindings = [];

	/**
	 * Render Antlers templates using the default layout file.
	 */
	protected function render(string $view, array $bindings = []): View
	{
		return (new View())
			->template($view)
			->layout('layout')
			->with(array_merge($this->bindings, $bindings));
	}

	/**
	 * Pass variables into templates to be used by Antlers
	 * You can use either an array of keys and values or a key value pair.
	 */
	protected function bind(array|string $name, ?string $value = null): static
	{
		if (is_array($name)) {
			$this->bindings = array_merge($this->bindings, $name);

			return $this;
		}

		$this->bindings[$name] = $value;

		return $this;
	}
}
