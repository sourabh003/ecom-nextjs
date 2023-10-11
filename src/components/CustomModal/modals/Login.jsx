import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useEffect, useState } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { loginFields, signupFields } from "@/data/formFields";
import { validateLogin, validateSignup } from "@/validators/loginValidators";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userLogin, userSignup } from "@/redux/actions/auth";
import { CLOSE_MODAL } from "@/redux/types/common";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const initalErrors = {
	firstName: null,
	lastName: null,
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
	const [isLoading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevState) => ({ ...prevState, [name]: value }));
		setFormErrors((prevState) => ({ ...prevState, [name]: null }));
	};

	const onSubmit = async (validateFunc, dispatchFunc, formData) => {
		const { isValid = false, errors = {} } = validateFunc(formData);
		if (!isValid)
			return setFormErrors(() => ({
				...errors,
			}));
		try {
			const message = await dispatch(dispatchFunc({ ...formData }));
			toast.success(message);
			dispatch({ type: CLOSE_MODAL });
		} catch (error) {
			console.error(error?.message || error);
		} finally {
			setLoading(false);
		}
	};

	const onLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { email, password } = formValues;
		setTimeout(async () => {
			await onSubmit(validateLogin, userLogin, { email, password });
		}, 500);
	};

	const onSignup = async (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(async () => {
			await onSubmit(validateSignup, userSignup, { ...formValues });
		}, 500);
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
			<CustomButton
				loading={isLoading}
				type="submit"
				variant="dark"
				className="mt-5 p-3 w-full"
			>
				{form === FormType.LOGIN ? "Login" : "Signup"}
			</CustomButton>
			<div className="mt-3 text-center">or</div>
			<div className="flex items-center justify-center">
				<SmButton
					disabled={isLoading}
					onClick={() => handleSocialMediaLogin("google")}
					icon={FaGoogle}
				/>
				<SmButton
					disabled={isLoading}
					onClick={() => handleSocialMediaLogin("facebook")}
					icon={FaFacebookF}
				/>
				<SmButton
					disabled={isLoading}
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

const SmButton = ({ icon: Icon, onClick = () => {}, disabled = false }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="bg-gray-200 w-fit p-3 rounded-full hover:bg-gray-300 transition 300 pointer mt-4 mr-5 last:mr-0"
		>
			<Icon />
		</button>
	);
};

export const FormType = {
	LOGIN: "login",
	SIGNUP: "signup",
};
