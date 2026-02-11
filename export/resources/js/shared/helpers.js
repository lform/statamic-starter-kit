export function $q(selectors, context) {
	let items = (context || document).querySelectorAll(selectors);
	return Array.from(items);
}

export function first(selectors, context) {
	return (context || document).querySelector(selectors);
}
