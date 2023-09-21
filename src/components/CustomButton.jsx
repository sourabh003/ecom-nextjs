import classNames from "classnames";
import React from "react";
import Loader from "./Loader";

export default function CustomButton({
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
			disabled={loading || disabled}
			className={classNames(
				"ml-5",
				"text-white",
				"py-2",
				"px-4",
				{ "bg-blue-500": variant === "primary" },
				{ "hover:bg-blue-700": variant === "primary" && !disabled && !loading },
				{ "bg-gray-300 text-white cursor-not-allowed": disabled || loading },
				className
			)}
			{...rest}
		>
			{loading ? <Loader small /> : children}
		</button>
	);
}
