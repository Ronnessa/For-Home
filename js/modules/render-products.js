export function renderProducts(container, category, array) {
	array.forEach(product => {
		if (product.categories.includes(category)) {
			const productItem = document.createElement('div');
			productItem.classList.add('bestsellers__item');
			
			if (product.oldPrice) {
				productItem.innerHTML = `
				<div class="item__image-container">
				<button data-id="${product.id}" class="item__heart">
				<img class="item__heart-img empty" src="./img/heart.svg" alt="dodaj do listy życzeń">
				<img class="item__heart-img item__heart-img--disabled filled" src="./img/heart-filled.svg" alt="usuń z listy życzeń">
				</button>
				<a data-id="${product.id}" href="produkt.html" class='link link-product-page'><img class="item__image" src="${product.imageUrl}" alt="${product.alt}"></a>
				</div>
				<div class="item__description-container">
				<h3 class="item__title"><a data-id="${product.id}" href="produkt.html" class='link link-product-page'>${product.title}</a></h3>
				<p class="item__price item__price--new">${product.price} zł<span class="item__price--old">${product.oldPrice} zł</span></p>
				<button data-id="${product.id}" class="item__btn add-to-cart">Dodaj do koszyka</button>
				</div>
				`;
			} else {
				productItem.innerHTML = `
				<div class="item__image-container">
				<button data-id="${product.id}" class="item__heart">
				<img class="item__heart-img empty" src="./img/heart.svg" alt="dodaj do listy życzeń">
				<img class="item__heart-img item__heart-img--disabled filled" src="./img/heart-filled.svg" alt="usuń z listy życzeń"></button>
				<a data-id="${product.id}" href="produkt.html" class='link link-product-page'><img class="item__image" src="${product.imageUrl}" alt="${product.alt}"></a>
				</div>
				<div class="item__description-container">
				<h3 class="item__title"><a data-id="${product.id}" href="produkt.html" class='link link-product-page'>${product.title}</a></h3>
				<p class="item__price">${product.price} zł</p>
				<button data-id="${product.id}" class="item__btn add-to-cart">Dodaj do koszyka</button>
				</div>
				`;
			}
			container.append(productItem);
		}
	});
}
