import { renderProducts } from './modules/render-products.js';
import { updateCartIcon } from './modules/update-cart-icon.js';
import { addToCart } from './modules/add-to-cart.js';
import { addToWishlist } from './modules/add-to-wishlist.js';
import { productList } from './modules/product-list.js';
import { sortProducts } from './modules/sorting-logic.js';

const bodyAttribute = document.body.dataset.page;

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

updateCartIcon(cart);

if (bodyAttribute === 'main') {
	import('./modules/header-slider.js').then(module => module.changeImages());

	const bestsellersList = document.getElementById('bestsellers-container');
	renderProducts(bestsellersList, 'bestsellers', productList);
	addToCart(cart);
	addToWishlist(wishlist);
} else if (bodyAttribute === 'product-list') {
	import('./modules/header-slider.js').then(module => module.changeImages());
	sortProducts(productList);
	const category = localStorage.getItem('category');
	const productListContainer = document.getElementById('product-list-container');
	renderProducts(productListContainer, category, productList);
	addToCart(cart);
	addToWishlist(wishlist);
	function addListenerToSortOptions() {
		const option = document.getElementById('sort');
		option.addEventListener('change', e => {
			const value = e.target.value;
			sortProducts(productList, value);
			productListContainer.innerHTML = ``;
			renderProducts(productListContainer, category, productList);
			addToCart(cart);
			addToWishlist(wishlist);
		});
	}
	addListenerToSortOptions();
} else if (bodyAttribute === 'product') {
	import('./modules/render-product-page.js').then(module => {
		module.renderPage();
		addToCart(cart);
	});
} else if (bodyAttribute === 'cart') {
	import('./modules/render-cart.js').then(module => {
		module.renderCart(cart);
		getProductData();
	});
	if (cart.length > 0) {
		import('./modules/change-amount-of-products.js').then(module => module.changeAmount(cart));
	}
} else if (bodyAttribute === 'wishlist') {
	const wishlistContainer = document.getElementById('wishlist-container');

	if (wishlist.length === 0) {
		const text = document.createElement('p');
		text.classList.add('wishlist__empty');
		text.textContent = 'Twoja lista życzeń jest pusta!';
		wishlistContainer.append(text);
	} else {
		renderProducts(wishlistContainer, 'all', wishlist);
		addToCart(cart);
		addToWishlist(wishlist);
	}
} else if (bodyAttribute === 'search') {
	import('./modules/search-engine.js').then(module => module.searchForProducts());
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
			const category = link.dataset.category;
			localStorage.setItem('category', category);
		})
	);
}
getCategoryData();

export function getProductData() {
	const links = document.querySelectorAll('.link-product-page');
	if (links) {
		links.forEach(link =>
			link.addEventListener('click', () => {
				const productData = link.dataset.id;
				localStorage.setItem('product', productData);
			})
		);
	}
}
getProductData();

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
