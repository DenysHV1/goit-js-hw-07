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
	const valueFromInput = Number(amount);

	let allBoxes = '';
	if (amount >= 1 && amount <= 100) {
		for (let i = valueFromInput; i > 0; i -= 1) {
			width += step;
			height += step;
			allBoxes += `<div class="all-boxes" style ="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()};"></div>`;
		}
		return container.insertAdjacentHTML('beforeend', allBoxes);
	}
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
