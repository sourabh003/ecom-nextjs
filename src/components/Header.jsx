import classNames from "classnames";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import CustomButton from "./CustomButton";

export default function Header() {
	return (
		<div
			className={classNames(
				"cus-container",
				"bg-black",
				"text-white",
				"p-5",
				"flex-wrap",
				"flex",
				"justify-between",
				"items-center"
			)}
		>
			<div>Logo</div>
			<div className="hidden lg:block lg:w-6/12">
				<Search />
			</div>
			<div className="flex items-center pointer">
				<FaShoppingCart />
				<CustomButton>Login</CustomButton>
			</div>
			<div className="lg:hidden w-full mt-5">
				<Search />
			</div>
		</div>
	);
}
