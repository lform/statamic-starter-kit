<?php

use App\Services\Faker\ExtendedFakerProvider;
use Faker\{Factory, Generator};

/**
 * Returns `tel:` URL for any phone number, including
 * phone numbers with letters and extensions.
 */
function telUrl(?string $phone): string
{
	$number = ltrim(preg_replace(
		'/\D/',
		'',
		strtr(
			$phone,
			'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			'22233344455566677778889999'
		)
	), '1');

	$extension = str_split($number, 10);
	$number = array_shift($extension);
	$extension = implode($extension);

	return "tel:+1{$number}".($extension ? ";ext={$extension}" : '');
}

/**
 * @return ExtendedFakerProvider|Generator
 */
function faker(): Generator // @phpstan-ignore-line
{
	static $_faker = null;

	if ($_faker === null) {
		$_faker = Factory::create();
		$_faker->addProvider(new ExtendedFakerProvider($_faker));
	}

	return $_faker;
}
