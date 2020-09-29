function validateForm() {
	let name = document.querySelector('#name').value;
	if (name == '') {
		alert('Imię musi być wprowadzone');
		return false;
	}
	let email = document.querySelector('#email').value;
	if (email == '') {
		alert('Email musi być wprowadzony');
		return false;
	}

	if (!email.includes('@') || !email.includes('.') || email.length < 5) {
		alert('Proszę użyć prawidłowego adresu email');
		return false;
	}
	let message = document.querySelector('#message').value;
	if (message == '') {
		alert('Wiadomość musi być wprowadzona');
		return false;
	}
}
