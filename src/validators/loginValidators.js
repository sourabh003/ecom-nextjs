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

	if (!data.firstName || data.firstName === "") {
		isValid = false;
		errors.firstName = "Required!";
	}
	if (!data.lastName || data.lastName === "") {
		isValid = false;
		errors.lastName = "Required!";
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
