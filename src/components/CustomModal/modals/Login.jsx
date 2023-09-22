import CustomButton from "@/components/CustomButton";
import React from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Login() {
	const handleSocialMediaLogin = (type) => {
		console.log({ type });
	};

	return (
		<div className="p-2">
			<div>
				<input
					type="text"
					className="border border-solid w-full text-md p-3"
					placeholder="Email"
				/>
				<input
					type="text"
					className="border border-solid w-full text-md p-3 mt-5"
					placeholder="Password"
				/>
			</div>
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
				<span>
					<a className="" href="">Sign up</a>
				</span>
			</div>
		</div>
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
