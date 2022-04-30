import { Product } from './product-constructor.js';

export const productList = [
	new Product(
		1,
		'Poduszka z sercem',
		'./img/products/bedroom/pillows/heart-pillow.jpg',
		'pomarańczowa poduszka z sercem',
		19.99,
		'',
		['bestsellers', 'bedroom', 'pillows', 'all']
	),
	new Product(
		2,
		'Pomarańczowe poduszki',
		'./img/products/bedroom/pillows/orange-pillow.jpg',
		'pomarańczowe poduszki w wzory',
		29.99,
		39.99,
		['bestsellers', 'bedroom', 'pillows', 'all', 'promo']
	),
	new Product(
		3,
		'Zestaw poduszek',
		'./img/products/bedroom/pillows/red-pillows.jpg',
		'trzy czerwone poduszki',
		59.99,
		'',
		['bedroom', 'pillows', 'all']
	),
	new Product(4, 'Klasyczna pościel', './img/products/bedroom/bedclothes/classic.jpg', 'pościel klasyczna', 79.99, '', [
		'bedroom',
		'bedclothes',
		'all',
	]),
	new Product(5, 'Przytulna pościel', './img/products/bedroom/bedclothes/cosy.jpg', 'przytulna, beżowa pościel', 69.99, 79.99, [
		'bedroom',
		'bedclothes',
		'all',
		'promo',
	]),
	new Product(6, 'Pościel w paski', './img/products/bedroom/bedclothes/stripes.jpg', 'pościel w kolorowe paski', 89.99, '', [
		'bedroom',
		'bedclothes',
		'all',
	]),
	new Product(
		7,
		`Kubek "Adventure"`,
		'./img/products/kitchen/mugs/adventure.jpg',
		`kubek z napisem "The adventure begins"`,
		19.99,
		'',
		['kitchen', 'mugs', 'all']
	),
	new Product(
		8,
		`Kubek "Like a boss"`,
		'./img/products/kitchen/mugs/boss.jpg',
		`kubek z napisem "Like a boss"`,
		24.99,
		'',
		['bestsellers', 'kitchen', 'mugs', 'all']
	),
	new Product(
		9,
		'Świąteczny kubek',
		'./img/products/kitchen/mugs/christmas.jpg',
		'świąteczny kubek z reniferem',
		19.99,
		24.99,
		['kitchen', 'mugs', 'all', 'promo']
	),
	new Product(
		10,
		'Kubek w kropki',
		'./img/products/kitchen/mugs/dots.jpg',
		'kubek w kolorowe kropki',
		24.99,
		'',
		['kitchen', 'mugs', 'all']
	),
	new Product(
		11,
		'Talerz klasyczny',
		'./img/products/kitchen/plates/classic.jpg',
		'klasyczny biały talerz',
		15.99,
		'',
		['kitchen', 'plates', 'all']
	),
	new Product(
		12,
		'Zielony talerz',
		'./img/products/kitchen/plates/green.jpg',
		'zielony talerz',
		16.99,
		'',
		['kitchen', 'plates', 'all']
	),
	new Product(
		13,
		'Talerz "Smutny"',
		'./img/products/kitchen/plates/sad.jpg',
		'talerz z smutną buźką',
		15.99,
		19.99,
		['bestsellers', 'kitchen', 'plates', 'all', 'promo']
	),
	new Product(
		14,
		'Doniczka klasyczna',
		'./img/products/living-room/flowerpots/classic.jpg',
		'biała, klasyczna doniczka',
		19.99,
		"",
		['living-room', 'flowerpots', 'all']
	),
	new Product(
		15,
		'Doniczka "Mini"',
		'./img/products/living-room/flowerpots/mini.jpg',
		'biała, mała doniczka',
		10.99,
		19.99,
		['living-room', 'flowerpots', 'all', 'promo']
	),
	new Product(
		16,
		'Doniczka "Piesek"',
		'./img/products/living-room/flowerpots/puppy.jpg',
		'biała doniczka w kształcie pieska',
		24.99,
		"",
		['bestsellers','living-room', 'flowerpots', 'all']
	),
	new Product(
		17,
		'Świeca drewniana',
		'./img/products/living-room/candles/wood.jpg',
		'świeca w drewnianym świeczniku',
		14.99,
		"",
		['living-room', 'candles', 'all']
	),
	new Product(
		18,
		'Świeca "Magic"',
		'./img/products/living-room/candles/magic.jpg',
		'świeca "kociołek magiczny',
		24.99,
		"",
		['bestsellers','living-room', 'candles', 'all']
	),
	new Product(
		19,
		'Świeca klasyczna',
		'./img/products/living-room/candles/tealight.jpg',
		'świeca w szklanym świeczniku',
		9.99,
		14.99,
		['living-room', 'candles', 'all', 'promo']
	),
];
