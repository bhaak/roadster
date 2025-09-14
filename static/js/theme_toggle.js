'use strict';

(function () {
	const KEY = 'theme'; // localStorage key
	const root = document.documentElement;
	const button = document.getElementById('theme-toggle');

	function setButtonAttributes(theme) {
		if (theme === 'dark') {
			button.setAttribute('aria-label', 'Switch to light mode');
		} else {
			button.setAttribute('aria-label', 'Switch to dark mode');
		}
		root.setAttribute('data-theme', theme);
		button.setAttribute('aria-pressed', theme === 'light');
		try {
			localStorage.setItem(KEY, theme);
		} catch(e) {
			// ignore
		}
	}

	// Determine initial theme: localStorage -> prefers-color-scheme -> default light
	function getPreferredTheme() {
		try {
			const stored = localStorage.getItem(KEY);
			if (stored === 'light' || stored === 'dark') {
				return stored;
			}
		} catch(e) {
			// localStorage blocked
		}

		const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
		if (mq && mq.matches) {
			return 'dark';
		}
		return 'light';
	}

	button.addEventListener('click', () => {
		const pressed = button.getAttribute('aria-pressed');
		const theme = (pressed === 'true' ? 'dark' : 'light');
		setButtonAttributes(theme);
	});

	const initial = getPreferredTheme();
	if (initial === 'light') {
		setButtonAttributes(initial);
	}
})();
