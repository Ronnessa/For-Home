import { productList } from './product-list.js';

export function addToWishlist(wishlist) {
	function addListeners() {
		const addBtns = document.querySelectorAll('.empty');
		addBtns.forEach(btn => btn.addEventListener('click', addToList));
		const removeBtns = document.querySelectorAll('.filled');
		removeBtns.forEach(btn => btn.addEventListener('click', removefromList));
	}
	addListeners();

	function addToList() {
		this.nextElementSibling.classList.remove('item__heart-img--disabled');
		this.classList.add('item__heart-img--disabled');

		const productId = this.parentNode.dataset.id;

		productList.forEach(product => {
			if (product.id == productId) {
				wishlist.push(product);
				localStorage.setItem('wishlist', JSON.stringify(wishlist));
			}
		});
	}

	function removefromList() {
		this.previousElementSibling.classList.remove('item__heart-img--disabled');
		this.classList.add('item__heart-img--disabled');

		const productId = this.parentNode.dataset.id;
		wishlist.forEach(product => {
			if (product.id == productId) {
				const index = wishlist.indexOf(product);
				wishlist.splice(index, 1);
				localStorage.setItem('wishlist', JSON.stringify(wishlist));
				if (document.body.dataset.page === 'wishlist') {
					location.reload();
				}
			}
		});
	}

	function toggleHeartIcons() {
		const heartBtns = document.querySelectorAll('.item__heart');
		heartBtns.forEach(btn => {
			const id = btn.dataset.id;
			wishlist.forEach(product => {
				if (product.id == id) {
					btn.children[0].classList.toggle('item__heart-img--disabled');
					btn.children[1].classList.toggle('item__heart-img--disabled');
				}
			});
		});
	}
	toggleHeartIcons();
}
