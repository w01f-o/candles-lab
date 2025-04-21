const initAuthPage = () => {
	const user = localStorage.getItem('user');

	if (user) {
		location.href = './profile.html';
	}

	const form = document.querySelector('.auth__form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const user = Object.fromEntries(new FormData(e.currentTarget));

		localStorage.setItem('user', JSON.stringify(user));
		location.href = './profile.html';
	});
};

initAuthPage();