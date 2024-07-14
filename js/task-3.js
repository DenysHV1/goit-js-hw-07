const inputOne = document.getElementById('name-input');
const outPutName = document.getElementById('name-output');

inputOne.addEventListener('input', yourText);

function yourText(evt) {
	const inputValue = evt.target.value.trim();
	if (inputValue === '') {
		outPutName.textContent = 'Anonymous';
	} else {
		outPutName.textContent = inputValue;
	}
}
