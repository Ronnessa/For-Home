export function updateCartIcon(cart) {
	const cartIcons = document.querySelectorAll('.ti-shopping-cart');
	if (cart.length === 0) {
		cartIcons.forEach(icon => icon.classList.remove('cart-icon'));
	} else {
		let amountIcon = 0
        cart.forEach(product => amountIcon += product.amount)

        cartIcons.forEach(icon => {
			icon.classList.add('cart-icon');
			icon.setAttribute('data-content', amountIcon);
		});
	}
}
