const input = document.querySelector('.input-create');
const buttonCreate = document.querySelector('.create-button');
const buttonDestroy = document.querySelector('.destroy-button');
const container = document.getElementById('boxes');

buttonCreate.addEventListener('click', () => {
	destroyBoxes();
	createBoxes(input.value);
	input.value = '';
});

buttonDestroy.addEventListener('click', () => {
	destroyBoxes();
});

function destroyBoxes() {
	container.innerHTML = '';
}

function createBoxes(amount) {
	const step = 10;
	let width = 20;
	let height = 20;

	let allBoxes = '';
	const num = Number(amount);

	if (amount >= 1 && amount <= 100) {
		for (let i = num; i > 0; i -= 1) {
			allBoxes += container.insertAdjacentHTML(
				'beforeend',
				'<div class="all-boxes"></div>'
			);
			width += step;
			height += step;
			container.lastChild.style.width = `${width}px`;
			container.lastChild.style.height = `${height}px`;
			container.lastChild.style.backgroundColor = getRandomHexColor();
		}
	}

	return allBoxes;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
