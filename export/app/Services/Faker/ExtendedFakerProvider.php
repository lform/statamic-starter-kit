<?php

namespace App\Services\Faker;

use Faker\Provider\Base;

class ExtendedFakerProvider extends Base
{
	public function headline($numWords): string
	{
		return ucwords(faker()->words($numWords, true));
	}

	public function htmlParagraphs(int $numParagraphs = 1): string
	{
		$buffer = [];
		foreach (range(1, $numParagraphs) as $index) {
			$buffer[] = '<p>'.faker()->paragraph(rand(3, 8)).'</p>';
		}

		return implode("\n", $buffer);
	}

	public function htmlList(int $numItems = 1, string $type = 'ul'): string
	{
		$buffer = [];
		foreach (range(1, $numItems) as $index) {
			$buffer[] = '<li>'.faker()->sentence.'</li>';
		}

		return "<{$type}>".implode("\n", $buffer)."</{$type}>";
	}

	public function richtext(int $numSections = 1): string
	{
		$buffer = [];
		foreach (range(1, $numSections) as $index) {
			// $buffer[] = rand(0, 3) === 0 ? $this->htmlParagraphs() : $this->generator->randomElement($this->htmlHeader());
			$buffer[] = $this->htmlHeader();
			$buffer[] = $this->htmlParagraphs(rand(2, 4));
			$buffer[] = rand(0, 1) ? $this->htmlList(rand(3, 8), rand(0, 1) ? 'ol' : 'ul') : null;
		}

		return implode("\n", array_filter($buffer));
	}

	protected function htmlHeader(): string
	{
		$headers = [
			'<h1>'.faker()->sentence.'</h1>',
			'<h2>'.faker()->sentence.'</h2>',
			'<h3>'.faker()->sentence.'</h3>',
			'<h4>'.faker()->sentence.'</h4>',
			'<h5>'.faker()->sentence.'</h5>',
			'<h6>'.faker()->sentence.'</h6>',
		];

		return $this->generator->randomElement($headers);
	}
}
