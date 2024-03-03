import { regexEmail, regexPassword, regexFullname } from "./constants.js";

function validation(input) {
	const errors = {};

	//* fullname
	if (!input.fullname) errors.fullname = "Debe ingresar un nombre.";
	else {
		if (!regexFullname.test(input.fullname))
			errors.fullname = "Ingrese un nombre válido.";
		if (input.fullname.length < 3)
			errors.fullname = "Debe tener más de 3 caracteres";
		if (input.fullname.length > 30)
			errors.fullname = "Debe tener menos de 30 caracteres";
	}

	//*email
	if (!input.email) errors.email = "Debe ingresar un email";
	if (input.email && !regexEmail.test(input.email))
		errors.email = "Ingrese un email válido";
	if (input.email && input.email.length > 25)
		errors.email = "Debe tener menos de 25 caracteres";

	//*password
	if (!input.password) errors.password = "Debe ingresar una contraseña";
	if (input.password && !regexPassword.test(input.password))
		errors.password =
			"Debe tener al menos una minúscula, una mayúscula, un número y un caracter especial.";
	if (input.password && input.password.length < 8)
		errors.password = "Mínimo 8 caracteres.";
	if (input.password && input.password.length > 20)
		errors.password = "Máximo 20 caracteres.";

	return errors;
}

export default validation;
