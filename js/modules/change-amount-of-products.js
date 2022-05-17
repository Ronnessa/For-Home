import { updateCartIcon } from './update-cart-icon.js';

export function changeAmount(cart) {
	function addListenersToBtns() {
		const incrementBtn = document.querySelectorAll('.increment');
		incrementBtn.forEach(btn => btn.addEventListener('click', increment));

		const decrementBtn = document.querySelectorAll('.decrement');
		decrementBtn.forEach(btn => btn.addEventListener('click', decrement));
	}
	addListenersToBtns();

	function increment() {
		const productId = this.dataset.id;
		const amount = this.previousElementSibling;
		const price = amount.closest('.cart__item-details--left').nextElementSibling.lastElementChild;
		cart.forEach(product => {
			if (product.id == productId && product.amount < 9) {
				product.amount++;
				localStorage.setItem('cart', JSON.stringify(cart));
				amount.textContent = product.amount;
				price.textContent = `${(product.price * product.amount).toFixed(2)} zł`;
			}
		});
		calculateTotalPrice();
		updateCartIcon(cart);
		changeBtns();
	}

	function decrement() {
		const productId = this.dataset.id;
		const amount = this.nextElementSibling;
		const price = amount.closest('.cart__item-details--left').nextElementSibling.lastElementChild;
		cart.forEach(product => {
			if (product.id == productId && product.amount > 1) {
				product.amount--;
				localStorage.setItem('cart', JSON.stringify(cart));
				amount.textContent = product.amount;
				price.textContent = `${(product.price * product.amount).toFixed(2)}`;
			}
		});
		calculateTotalPrice();
		updateCartIcon(cart);
		changeBtns();
	}

	function calculateTotalPrice() {
		const prices = document.querySelectorAll('.cart__price');
		let totalPrice = 0;

		prices.forEach(price => {
			totalPrice += parseFloat(price.textContent);
		});

		const totalPriceText = document.getElementById('total-price');
		totalPriceText.textContent = `${totalPrice.toFixed(2)} zł`;
	}
	calculateTotalPrice();

	function changeBtns() {
		const amounts = document.querySelectorAll('.cart__amount');
		amounts.forEach(amount => {
			const decrementBtn = amount.previousElementSibling;
			const incrementBtn = amount.nextElementSibling;

			if (amount.textContent == 1) {
				decrementBtn.classList.add('cart__item-btn--disabled');
			} else {
				decrementBtn.classList.remove('cart__item-btn--disabled');
			}

			if (amount.textContent == 9) {
				incrementBtn.classList.add('cart__item-btn--disabled');
			} else {
				incrementBtn.classList.remove('cart__item-btn--disabled');
			}
		});
	}
	changeBtns();
}
