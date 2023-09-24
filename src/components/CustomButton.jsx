import classNames from "classnames";
import React from "react";
import { Loader } from "rsuite";

export default function CustomButton({
	type = "button",
	variant = "primary",
	loading = false,
	disabled = false,
	children,
	onClick = () => {},
	className = "",
	...rest
}) {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={loading || disabled}
			className={classNames(
				"flex",
				"items-center",
				"justify-center",
				"text-white",
				"transition 300",
				{ "bg-blue-500": variant === "primary" },
				{ "hover:bg-blue-700": variant === "primary" && !disabled && !loading },
				{ "bg-black": variant === "dark" },
				{ "hover:bg-gray-900": variant === "dark" && !disabled && !loading },
				{ "bg-gray-300 text-white cursor-not-allowed": disabled || loading },
				className
			)}
			{...rest}
		>
			{loading ? <Loader size="sm" /> : children}
		</button>
	);
}
