const form = document.querySelector('.login-form');

class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
}

form.addEventListener('submit', oneClick);

function oneClick(event) {
	event.preventDefault();
	const element = event.target.elements;

	let login = '';
	let password = '';

	if (!element.email.value) {
		return alert('All form fields must be filled in');
	} else {
		login = element.email.value;
	}

	if (!element.password.value) {
		return alert('All form fields must be filled in');
	} else {
		password = element.password.value;
	}

	form.reset();
	const userObject = new User(login.trim(), password.trim());
	console.dir(userObject);
}
