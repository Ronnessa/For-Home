import {Product} from './product-constructor.js'

export const productList = [
	new Product(
		1,
		'Poduszka z sercem',
		'./img/products/bedroom/pillows/heart-pillow.jpg',
		'pomarańczowa poduszka z sercem',
		19.99,'',
		['bestsellers', 'bedroom', 'pillows', 'all',]
	),
	new Product(
		2, 
		'Pomarańczowe poduszki',
		'./img/products/bedroom/pillows/orange-pillow.jpg',
		'pomarańczowe poduszki w wzory',
		29.99,
		39.99,
		['bestsellers', 'bedroom', 'pillows', 'all']
	),
	new Product(
		3, 
		'Zestaw poduszek', './img/products/bedroom/pillows/red-pillows.jpg', 'trzy czerwone poduszki', 59.99, '',['bedroom', 'pillows', 'all']
		// !
	)
];