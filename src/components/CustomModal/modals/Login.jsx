import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React, { useEffect, useMemo, useState } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { loginFields, signupFields } from "@/data/formFields";
import { validateLogin, validateSignup } from "@/validators/loginValidators";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "@/redux/types/auth";

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
};

const initalErrors = {
	firstname: null,
	lastname: null,
	email: null,
	password: null,
};

export default function Login({ formType }) {
	const dispatch = useDispatch();
	const [formErrors, setFormErrors] = useState({
		...initalErrors,
	});
	const [formValues, setFormValues] = useState({
		...initialValues,
	});
	const [form, setForm] = useState(formType);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevState) => ({ ...prevState, [name]: value }));
		setFormErrors((prevState) => ({ ...prevState, [name]: null }));
	};

	const onLogin = (e) => {
		e.preventDefault();
		const { isValid = false, errors = {} } = validateLogin(formValues);
		if (!isValid)
			return setFormErrors(() => ({
				...errors,
			}));
		const { email, password } = formValues;
		dispatch({ type: USER_LOGIN, payload: { email, password } });
	};

	const onSignup = (e) => {
		e.preventDefault();
		const { isValid = false, errors = {} } = validateSignup(formValues);
		if (!isValid)
			return setFormErrors(() => ({
				...errors,
			}));
	};

	const handleSocialMediaLogin = (type) => {
		console.log({ type });
	};

	useEffect(() => {
		setFormValues({ ...initialValues });
		setFormErrors({ ...initalErrors });
	}, [form]);

	return (
		<form
			className="p-2"
			action="#"
			onSubmit={form === FormType.LOGIN ? onLogin : onSignup}
		>
			{[...(form === FormType.LOGIN ? loginFields : signupFields)].map(
				(props) => (
					<CustomInput
						{...props}
						onChange={handleChange}
						key={props.name}
						classes="mt-5 first:mt-0"
						error={formErrors?.[props.name] || ""}
					/>
				)
			)}
			<CustomButton type="submit" variant="dark" className="mt-5 p-3 w-full">
				{form === FormType.LOGIN ? "Login" : "Signup"}
			</CustomButton>
			<div className="mt-3 text-center">or</div>
			<div className="flex items-center justify-center">
				<SmButton
					onClick={() => handleSocialMediaLogin("google")}
					icon={FaGoogle}
				/>
				<SmButton
					onClick={() => handleSocialMediaLogin("facebook")}
					icon={FaFacebookF}
				/>
				<SmButton
					onClick={() => handleSocialMediaLogin("apple")}
					icon={FaApple}
				/>
			</div>
			<hr />
			{form === FormType.LOGIN ? (
				<div className="text-center">
					Not a member?{" "}
					<span
						onClick={() => setForm(FormType.SIGNUP)}
						className="text-blue-500 hover:text-blue-800 pointer"
					>
						Sign up
					</span>
				</div>
			) : (
				<div className="text-center">
					Already a member?{" "}
					<span
						onClick={() => setForm(FormType.LOGIN)}
						className="text-blue-500 hover:text-blue-800 pointer"
					>
						Login
					</span>
				</div>
			)}
		</form>
	);
}

const SmButton = ({ icon: Icon, onClick = () => {} }) => {
	return (
		<div
			onClick={onClick}
			className="bg-gray-200 w-fit p-3 rounded-full hover:bg-gray-300 transition 300 pointer mt-4 mr-5 last:mr-0"
		>
			<Icon />
		</div>
	);
};

export const FormType = {
	LOGIN: "login",
	SIGNUP: "signup",
};
