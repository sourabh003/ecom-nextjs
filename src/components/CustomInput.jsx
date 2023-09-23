import classNames from "classnames";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CustomInput({
	onChange,
	value,
	classes,
	inputClasses,
	placeholder,
	name,
	type = "text",
}) {
	const [showPassword, passwordToggle] = useState(false);

	return (
		<div
			className={classNames(
				"border border-solid w-full text-md flex items-center",
				classes
			)}
		>
			<input
				className={classNames("p-3 w-full", inputClasses)}
				type={type === "password" ? (showPassword ? "text" : "password") : type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{type === "password" && (
				<button
					type="button"
					onClick={() => passwordToggle((prevState) => !prevState)}
					className="hover:bg-gray-200 p-2 rounded-full transition 300 mx-1"
				>
					{showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
				</button>
			)}
		</div>
	);
}
