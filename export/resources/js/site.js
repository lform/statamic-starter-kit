import.meta.glob(["../images/**"]); // Add icons if needed

document.addEventListener("DOMContentLoaded", () => {
    /*
     * Nav Dropdown Toggle
     *
     * Toggles the mobile navigation on and off on mobile devices
     */
    function toggleNavdropdown(event) {
        const dropdown = event.target.parentNode.querySelector(".js-nav-dropdown");
        if (!dropdown.classList.contains("hidden")) {
            closeAllDropdowns();
        } else {
            closeAllDropdowns();
            dropdown.classList.remove("hidden");
        }
    }

    document.querySelectorAll(".js-nav-dropdown-toggle").forEach((elm) => {
        elm.addEventListener("click", (event) => toggleNavdropdown(event));
    })

    /*
	 * Mobile Nav Toggle
	 *
	 * Toggles the mobile navigation on and off on mobile devices
	 */
    function toggleNav() {
        document.querySelector(".js-nav").classList.toggle("nav-active");
    }

    document.querySelector(".js-nav-toggle").addEventListener("click", () => toggleNav());
    document.querySelector(".js-nav-backdrop").addEventListener("click", () => toggleNav());
});
