const initHamburgerMenu = () => {
	const hamburgerEl = document.querySelector('header .hamburger');
	const hamburgerButtonEl = hamburgerEl.querySelector('.hamburger__button');

	hamburgerButtonEl.addEventListener('click', () => {
		hamburgerEl.classList.toggle('hamburger_collapsed');
		document.body.classList.toggle('body_backdrop');
	});

	document.body.addEventListener('click', (e) => {
		if (!e.target.closest('.hamburger')) {
			hamburgerEl.classList.remove('hamburger_collapsed');
			document.body.classList.remove('body_backdrop');
		}
	});
};

initHamburgerMenu();