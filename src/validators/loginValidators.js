export const validateLogin = (data) => {
	let isValid = true,
		errors = {};

	if (!data.email || data.email === "") {
		isValid = false;
		errors.email = "Required!";
	}
	if (!data.password || data.password === "") {
		isValid = false;
		errors.password = "Required!";
	}
	return { isValid, errors };
};

export const validateSignup = (data) => {
	let isValid = true,
		errors = {};

	if (!data.firstname || data.firstname === "") {
		isValid = false;
		errors.firstname = "Required!";
	}
	if (!data.lastname || data.lastname === "") {
		isValid = false;
		errors.lastname = "Required!";
	}
	if (!data.email || data.email === "") {
		isValid = false;
		errors.email = "Required!";
	}
	if (!data.password || data.password === "") {
		isValid = false;
		errors.password = "Required!";
	}
	return { isValid, errors };
};
