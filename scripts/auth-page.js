const initAuthPage = () => {
	const user = localStorage.getItem('user');

	if (user) {
		location.href = './profile.html';
	}

	const form = document.querySelector('.auth__form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
};

initAuthPage();