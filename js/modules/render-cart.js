export function renderCart(cart) {
	const cartList = document.getElementById('cart-container');
	if (cart.length === 0) {
		const text = document.createElement('p');
		text.classList.add('cart__empty');
		text.textContent = 'Twój koszyk jest pusty!';
		cartList.append(text);
	} else {
		const container = document.getElementById('cart-container');
		const list = document.createElement('ul');
		list.classList.add('cart-list');
		container.append(list);

		const sum = document.createElement('div')
		sum.innerHTML = `
		<p class="cart__sum-text">Razem:
			<span id='total-price'></span>
		</p>
		`
		container.append(sum);

		const btns = document.createElement('div');
		container.append(btns);
		btns.innerHTML = `
		<div class='cart__btn-container'>
            <button id='clear-btn' class='cart__btn'>Wyczyść koszyk</button>
            <button id='order-btn' class='cart__btn cart__btn--cta'>Zamawiam</button>
        </div>
		`;

		cart.forEach(product => {
			const item = document.createElement('li');
			item.classList.add('cart__item');
			item.innerHTML = `
			<img class="cart__item-img" src="${product.imageUrl}" alt="${product.alt}">
			<h3>${product.title}</h3>
			<div class="cart__item-details">
				<div class="cart__item-details--left">
					<p>Ilość:
					</p>
					<p>
						<button data-id="${product.id}" class="cart__item-btn decrement">-</button>
						<span class="cart__amount">${product.amount}</span>
						<button data-id="${product.id}" class="cart__item-btn increment">+</button>
					</p>
				</div>
				<div>
					<p>Cena:</p>
					<p class="cart__price">${(product.price * product.amount).toFixed(2)} zł</p>
				</div>
			</div>
			`;
			list.append(item);
		});
	}

	function clearCart() {
		if (cart.length > 0) {
			const clearBtn = document.getElementById('clear-btn');
			clearBtn.addEventListener('click', clearCartHandler);
		}

		function clearCartHandler() {
			cart.length = 0;
			localStorage.setItem('cart', JSON.stringify(cart));
			location.reload();
		}
	}
	clearCart();
}
