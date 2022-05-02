export function renderCart(cart) {
	const cartList = document.getElementById('cart-container');
	if (cart.length === 0) {
		const text = document.createElement('p');
		text.classList.add('cart__empty');
		text.textContent = 'Twój koszyk jest pusty!';
		cartList.append(text);
	} else {
		const container = document.getElementById('cart-container');
		const list = document.createElement('ul')
		container.append(list)
		
		cart.forEach(product => {
			const item = document.createElement('li')
			item.classList.add('cart__item')
			item.innerHTML = `
			<img class="cart__item-img" src="${product.imageUrl}" alt="${product.alt}">
			<h3>${product.title}</h3>
			<div class="cart__item-details">
				<div class="cart__item-details--left">
					<p>Ilość:
					</p>
					<p>
						<button class="cart__btn increment">-</button>
						<span class="cart__amount">${product.amount}</span>
						<button class="cart__btn decrement">+</button>
					</p>
				</div>
				<div>
					<p>Cena:</p>
					<p class="cart__price">${product.price * product.amount}</p>
				</div>
			</div>
			`
			list.append(item)
		});
		
	}
}
