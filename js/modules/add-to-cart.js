import { productList } from './product-list.js';

export function addToCart(cart) {
	const addBtns = document.querySelectorAll('.add-to-cart');
	addBtns.forEach(btn => btn.addEventListener('click', pushProductToCart));

	function pushProductToCart() {
		const productId = this.getAttribute('data-id');

		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id == productId) {
				cart[i].amount++;
				localStorage.setItem('cart', JSON.stringify(cart));
				return;
			}
		}
		productList.forEach(obj => {
			if (obj.id == productId) {
				cart.push(obj);
				localStorage.setItem('cart', JSON.stringify(cart));
			}
		});
	}
}