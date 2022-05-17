import { renderProducts } from './render-products.js';
import { productList } from './product-list.js';
import { addToCart } from './add-to-cart.js';
import { addToWishlist } from './add-to-wishlist.js';
import { getProductData } from '../main.js';

export function searchForProducts() {
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

	function addListenerToForm() {
		const form = document.getElementById('search-form');
		form.addEventListener('submit', e => search(e));
	}
	addListenerToForm();

	const searchListContainer = document.getElementById('product-container');
	
	function search(e) {
		e.preventDefault();
		let searchText = document.getElementById('search-input');
		const searchWord = searchText.value.toLowerCase();
		searchText.value = '';
		searchListContainer.innerHTML = ``;
		const searchList = [];
		productList.forEach(product => {
			if (product.title.toLowerCase().includes(searchWord)) {
				searchList.push(product);
			}
		});
		renderSearchedProducts(searchList, searchWord);
	}
	
	function renderSearchedProducts(arr, word) {
		const resultText = document.querySelector('.search__result-text')
		if (arr.length > 0) {
			resultText.textContent = `Wyniki wyszukiwania dla "${word}"`
			renderProducts(searchListContainer, 'all', arr);
			getProductData()
			addToCart(cart);
			addToWishlist(wishlist);
		}
		else {
			resultText.textContent = `Brak wyników wyszukiwania dla "${word}"`
		}
	}
}
