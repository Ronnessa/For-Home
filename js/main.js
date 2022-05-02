import { renderProducts } from './modules/render-products.js';
import { addToCart } from './modules/add-to-cart.js';
import { renderCart } from './modules/render-cart.js';

const bodyAtribute = document.body.getAttribute('data-page');

const cart = [];
const cartLocalStorage = localStorage.getItem('cart');
if (JSON.parse(cartLocalStorage)) {
	cart.push(...JSON.parse(cartLocalStorage));
}

// const wishlist = []
// const wishlistLocalStorage = localStorage.getItem('wishlist')
// if (JSON.parse(wishlistLocalStorage)) {
// 	wishlist.push(...JSON.parse(wishlistLocalStorage))
// }

if (bodyAtribute === 'main') {
	import('./modules/header-slider.js').then(module => module.changeImages());
	function renderBestsellers() {
		const bestsellersList = document.getElementById('bestsellers-container');
		renderProducts(bestsellersList, 'bestsellers');
	}
	renderBestsellers();
	addToCart(cart);
} else if (bodyAtribute === 'cart') {
	renderCart(cart);
	
}

// all pages functions

function addListenerToNav() {
	const navBtn = document.getElementById('nav-btn');
	navBtn.addEventListener('click', toggleNavigation);

	function toggleNavigation() {
		const navMobile = document.getElementById('nav-mobile');
		const navIcon = document.getElementById('nav-icon');
		navIcon.classList.toggle('ti-menu-2');
		navIcon.classList.toggle('ti-x');
		navMobile.classList.toggle('nav__items--active');
		navBtn.classList.add('nav-btn-animation');
		setTimeout(() => {
			navBtn.classList.remove('nav-btn-animation');
		}, 400);

		if (navMobile.classList.contains('nav__items--active')) {
			window.addEventListener('scroll', toggleNavigation);
		} else {
			window.removeEventListener('scroll', toggleNavigation);
		}

		navMobile.addEventListener('click', toggleNavigation);
	}
}
addListenerToNav();

function showFAQAnswers() {
	const questions = document.querySelectorAll('.faq__heading');
	const answers = document.querySelectorAll('.faq__content');
	questions.forEach(question => question.addEventListener('click', showAnswer));
	answers.forEach(answer => answer.addEventListener('click', closeAnswers));

	function showAnswer() {
		const currentAnswer = this.nextElementSibling;
		if (currentAnswer.classList.contains('active')) {
			closeAnswers();
		} else {
			closeAnswers();
			currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
			currentAnswer.classList.add('active');
			this.lastElementChild.classList.add('icon-rotate');
		}
	}

	function closeAnswers() {
		answers.forEach(a => {
			if (a.classList.contains('active')) {
				a.style.maxHeight = 0;
				a.classList.remove('active');
			}
		});
		rotateIcon();
	}

	function rotateIcon() {
		const icons = document.querySelectorAll('.faq__heading > button');
		icons.forEach(icon => {
			if (icon.classList.contains('icon-rotate')) {
				icon.classList.remove('icon-rotate');
			}
		});
	}
}
showFAQAnswers();

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
