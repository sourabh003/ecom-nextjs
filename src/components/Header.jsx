import classNames from "classnames";
import React from "react";
import {
	FaShoppingCart,
	FaAngleDown,
	FaUserAlt,
	FaArrowLeft,
} from "react-icons/fa";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/actions/auth";
import { SET_USER } from "@/redux/types/auth";
import { TOGGLE_CART_DRAWER } from "@/redux/types/cart";
import { useRouter } from "next/router";

export default function Header() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user, isLoggedIn = false } = useSelector((state) => state.auth);

	const handleLogin = () => {
		console.log("test");
		const payload = {
			user: {
				name: "Sourabh",
			},
			token: "asdf",
		};
		dispatch({ type: SET_USER, payload });
	};

	const onCartClick = () => {
		dispatch({ type: TOGGLE_CART_DRAWER });
	};

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
				"items-center",
				"box-border"
			)}
		>
			<div className="flex items-center">
				{router.pathname !== "/" && (
					<button className="mr-4" onClick={() => router.back()}>
						<FaArrowLeft />
					</button>
				)}
				<div>Logo</div>
			</div>
			{router.pathname !== "/checkout" && (
				<div className="hidden lg:block lg:w-6/12">
					<Search />
				</div>
			)}
			<div className="flex items-center pointer">
				{router.pathname !== "/checkout" && (
					<button onClick={onCartClick}>
						<FaShoppingCart />
					</button>
				)}
				{isLoggedIn ? (
					<div className="flex items-center ml-5 border-solid border p-2 rounded-xl">
						<FaUserAlt />
						<div className="px-2">{user.name}</div>
						<FaAngleDown />
					</div>
				) : (
					<CustomButton className="rounded-xl w-20" onClick={handleLogin}>
						Login
					</CustomButton>
				)}
			</div>
			{router.pathname !== "/checkout" && (
				<div className="lg:hidden w-full mt-5">
					<Search />
				</div>
			)}
		</div>
	);
}
