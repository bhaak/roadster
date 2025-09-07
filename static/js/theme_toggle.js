'use strict';

(function () {
	function swapForeBackgroundColor() {
		const root = document.documentElement;

		// Get current values
		const c1 = getComputedStyle(root).getPropertyValue('--foreground-color').trim();
		const c2 = getComputedStyle(root).getPropertyValue('--background-color').trim();

		// Swap
		root.style.setProperty('--foreground-color', c2);
		root.style.setProperty('--background-color', c1);
	}

	function swapVisibility(element) {
		const computedStyle = getComputedStyle(element);
		if (computedStyle.display == 'none') {
			element.style.display = 'inline';
		} else {
			element.style.display = 'none';
		}
	}

	function swapToggleIcons() {
		swapVisibility(document.getElementById('icon-sun'));
		swapVisibility(document.getElementById('icon-moon'));
	}

	// Toggle on click
	const button = document.getElementById('theme-toggle');
	button.addEventListener('click', () => {
		swapForeBackgroundColor();
		swapToggleIcons();
	});
})();
