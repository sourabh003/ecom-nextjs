import classNames from "classnames";
import React from "react";
import { Loader } from "rsuite";

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
                "flex",
                "items-center",
                "justify-center",
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
			{loading ? <Loader size="sm" /> : children}
		</button>
	);
}
