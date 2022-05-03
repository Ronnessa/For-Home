import { productList } from './product-list.js';
import { updateCartIcon } from './update-cart-icon.js';

export function addToCart(cart) {
	const addBtns = document.querySelectorAll('.add-to-cart');
	addBtns.forEach(btn => btn.addEventListener('click', pushProductToCart));

	function pushProductToCart() {
		const productId = this.getAttribute('data-id');

		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id == productId) {
				if (cart[i].amount < 9) {
					cart[i].amount++;
					localStorage.setItem('cart', JSON.stringify(cart));
					updateCartIcon(cart);
				}
				return;
			}
		}
		productList.forEach(obj => {
			if (obj.id == productId) {
				cart.push(obj);
				localStorage.setItem('cart', JSON.stringify(cart));
				updateCartIcon(cart);
			}
		});
	}
}
