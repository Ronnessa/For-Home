export function sortProducts(list, value) {
	if (value === 'none' || !value) {
		list.sort((a,b) => a.id - b.id)
	} else if (value === 'a') {
		list.sort((a, b) => a.title.replace('"', '').localeCompare(b.title.replace('"', '')));
	} else if (value === 'z') {
		list.sort((a, b) => a.title.replace('"', '').localeCompare(b.title.replace('"', ''))).reverse();
	} else if (value === '1') {
		list.sort((a, b) => a.price - b.price);
	} else if (value === '9') {
		list.sort((a, b) => b.price - a.price);
	}
}
