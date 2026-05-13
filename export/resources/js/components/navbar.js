import { $q, first } from "../shared/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
	const navbarElement = first(".js-nav");

	/*
	 * Nav Submenu Toggle
	 */
	function closeAllDropdowns() {
		$q(".js-submenu-container").forEach(e => {
			if (e.classList.contains("active")) {
				e.classList.remove("active");
			}
		});
	}

	function toggleNavSubmenu(event) {
		// If Icon is clicked choose the submenu is the parent of the parent
		const submenu = event.target.classList.contains("icon")
			? event.target.parentNode.parentNode
			: event.target.parentNode;

		if (submenu.classList.contains("active")) {
			closeAllDropdowns();
		} else {
			closeAllDropdowns();
			submenu.classList.add("active");
		}
	}

	// Binds all dropdowns
	$q(".js-submenu-toggle").forEach(elm => {
		elm.addEventListener("click", event => toggleNavSubmenu(event));
	});

	// Global Check Click Outside of Submenu
	document.addEventListener("click", e => {
		// Check if the clicked element or any of its ancestors has the class 'js-submenu-container'
		const isInsideSubmenu = e.target.closest(".js-submenu-container");

		if (!isInsideSubmenu) {
			closeAllDropdowns();
		}
	});

	/*
	 * Mobile Nav Toggle
	 *
	 * Toggles the mobile navigation on and off on mobile devices
	 */
	function toggleNav() {
		navbarElement.classList.toggle("nav-active");
	}

	first(".js-nav-toggle").addEventListener("click", () => toggleNav());
	first(".js-nav-backdrop").addEventListener("click", () => toggleNav());

	function updateIsScrolled() {
		if (window.scrollY > 0) {
			navbarElement.classList.add("nav-scrolled");
		} else {
			navbarElement.classList.remove("nav-scrolled");
		}
	}

	document.addEventListener("scroll", updateIsScrolled);
	updateIsScrolled();
});
