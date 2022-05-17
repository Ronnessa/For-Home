import { productList } from './product-list.js';

export function renderPage() {
	const container = document.getElementById('product-container');
	let productId = localStorage.getItem('product');
	if (!productId) {
		productId = 1;
	}
	productList.forEach(product => {
		if (product.id == productId) {
			const productDiv = document.createElement('div');
			productDiv.classList.add('product__container');
			productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.alt}" class="product__image">
            <div class="product__details">
                <h2 class="product__title">${product.title}</h2>
                <p class="product__price">${product.price} zł</p>
                <button data-id="${product.id}" class="product__btn add-to-cart">Dodaj do koszyka</button>
                <p class="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam reprehenderit corrupti maxime repudiandae? Laboriosam, animi possimus eum esse labore autem nisi minus iusto? Minus doloribus commodi soluta quae a!</p>
            </div>
            `;
			container.append(productDiv);
		}
	});
}
