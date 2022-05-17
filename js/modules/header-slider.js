export function changeImages() {
	const forwardBtn = document.getElementById('forward-btn');
	const backwardBtn = document.getElementById('backward-btn');
	forwardBtn.addEventListener('click', () => {
		slide('forwards');
	});
	backwardBtn.addEventListener('click', () => {
		slide('backwards');
	});

	function slide(direction) {
		const images = document.querySelectorAll('.header-img');
		images.forEach(image => {
			image.classList.toggle('header-img--active');
			image.classList.toggle('header-img--disabled');
			if (image.classList.contains('header-img--active')) {
				image.style.animationName = `show-${direction}`;
			}
			if (image.classList.contains('header-img--disabled')) {
				image.style.animationName = `hide-${direction}`;
			}
		});
	}
	setInterval(() => {
		slide('forwards');
	}, 5000);
}
