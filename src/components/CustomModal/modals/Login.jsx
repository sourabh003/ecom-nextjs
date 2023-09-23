import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React, { useState } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { loginFields, signupFields } from "@/data/formFields";

export default function Login({ formType }) {
	const handleSocialMediaLogin = (type) => {
		console.log({ type });
	};

	const [form, setForm] = useState(formType);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("Submit");
	};

	if (form === "login") {
		return (
			<div className="p-2">
				{loginFields.map((props) => (
					<CustomInput key={props.name} {...props} classes="mt-5 first:mt-0" />
				))}
				<CustomButton variant="dark" className="mt-5 p-3 w-full">
					Login
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
				<div className="text-center">
					Not a member?{" "}
					<span
						onClick={() => setForm("signup")}
						className="text-blue-500 hover:text-blue-800 pointer"
					>
						Sign up
					</span>
				</div>
			</div>
		);
	}

	return (
		<form className="p-2" action="#" onSubmit={onSubmit}>
			{signupFields.map((props) => (
				<CustomInput key={props.name} {...props} classes="mt-5 first:mt-0" />
			))}
			<CustomButton variant="dark" className="mt-5 p-3 w-full">
				Login
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
			<div className="text-center">
				Already a member?{" "}
				<span
					onClick={() => setForm("login")}
					className="text-blue-500 hover:text-blue-800 pointer"
				>
					Login
				</span>
			</div>
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
