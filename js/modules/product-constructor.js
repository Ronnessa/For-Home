export class Product {
	constructor(id, title, image, alt, price, oldPrice, categories) {
		this.id = id
		this.title = title;
		this.imageUrl = image;
		this.alt = alt;
		this.price = price;
		this.oldPrice = oldPrice
		this.categories = categories;
		this.amount = 1
	}
}