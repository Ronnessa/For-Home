import {productList} from './product-list.js'

export function renderProducts(container, category) {
	productList.forEach(product => {
		if (product.categories.includes(category)) {
			const productItem = document.createElement('div');
			productItem.classList.add('bestsellers__item');
			productItem.innerHTML = `
		<div class="item__image-container">
        <button class="item__heart"><i class="ti ti-heart"></i></button>
        <img class="item__image" src="${product.imageUrl}" alt="${product.alt}">
	    </div>
		<h3 class="item__title">${product.title}</h3>
    	<p class="item__price">${product.price}zł</p>
    	<button class="item__btn">Dodaj do koszyka</button>
		`;
			container.append(productItem);
		}
	});
}
