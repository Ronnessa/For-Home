import { renderProducts } from './modules/render-products.js';
import { updateCartIcon } from './modules/update-cart-icon.js';
import { addToCart } from './modules/add-to-cart.js';
import { renderCart } from './modules/render-cart.js';
import { addToWishlist } from './modules/add-to-wishlist.js';
import { changeAmount } from './modules/change-amount-of-products.js';

const bodyAttribute = document.body.getAttribute('data-page');

const cart = [];
const cartLocalStorage = localStorage.getItem('cart');
if (JSON.parse(cartLocalStorage)) {
	cart.push(...JSON.parse(cartLocalStorage));
}

const wishlist = [];
const wishlistLocalStorage = localStorage.getItem('wishlist');
if (JSON.parse(wishlistLocalStorage)) {
	wishlist.push(...JSON.parse(wishlistLocalStorage));
}


console.log(wishlist);

updateCartIcon(cart);

if (bodyAttribute === 'main') {
	import('./modules/header-slider.js').then(module => module.changeImages());
	function renderBestsellers() {
		const bestsellersList = document.getElementById('bestsellers-container');
		renderProducts(bestsellersList, 'bestsellers', wishlist);
	}
	renderBestsellers();
	addToCart(cart);
	addToWishlist(wishlist)
} else if (bodyAttribute === 'product-list') {
	import('./modules/header-slider.js').then(module => module.changeImages());
	const category = localStorage.getItem('category');
	function renderProductList() {
		const productListContainer = document.getElementById('product-list-container');
		renderProducts(productListContainer, category, wishlist);
	}
	renderProductList();
	addToCart(cart);
	addToWishlist(wishlist)
} else if (bodyAttribute === 'product') {

} else if (bodyAttribute === 'cart') {
	renderCart(cart);
	if (cart.length > 0) {
		changeAmount(cart);
	}
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

function getCategoryData() {
	const links = document.querySelectorAll('.link-product');
	links.forEach(link =>
		link.addEventListener('click', () => {
			const category = link.getAttribute('data-category');
			localStorage.setItem('category', category);
		})
	);
}
getCategoryData();

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
