const initProfilePage = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	if (!user) {
		return;
		// location.href = './auth.html';
	}

	const userDataContainerEl = document.querySelector('.profile__data');

	const nameEl = userDataContainerEl.querySelector('.profile__data-name');
	const phoneEl = userDataContainerEl.querySelector('.profile__data-phone');
	const emailEl = userDataContainerEl.querySelector('.profile__data-email');

	nameEl.textContent = user.name;
	emailEl.textContent = user.email;
	phoneEl.textContent = user.phone;
};

initProfilePage();