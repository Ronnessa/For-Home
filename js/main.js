function addListenerToNav() {
	const navBtn = document.getElementById('nav-btn');
	navBtn.addEventListener('click', toggleNavigation);

	function toggleNavigation() {
		const navMobile = document.getElementById('nav-mobile');
		const navIcon = document.getElementById('nav-icon');
		navIcon.classList.toggle('ti-menu-2');
		navIcon.classList.toggle('ti-x');
		navMobile.classList.toggle('nav__items--active');

		if (navMobile.classList.contains('nav__items--active')) {
			window.addEventListener('scroll', toggleNavigation);
		} else {
			window.removeEventListener('scroll', toggleNavigation);
		}

		navMobile.addEventListener('click', toggleNavigation);
	}
}
addListenerToNav();

function signUpForNewsletter() {
	const form = document.getElementById('newsletter');
	form.addEventListener('submit', e => sendConfirmation(e));

	function sendConfirmation(e) {
		e.preventDefault();
		const confirmationText = document.querySelector('.contact__confirmation-text');
		confirmationText.textContent = `Zapisano do newslettera!`;
	}
}
signUpForNewsletter();

function getYear() {
	const span = document.getElementById('year');
	const date = new Date();
	span.textContent = date.getFullYear();
}
getYear();
