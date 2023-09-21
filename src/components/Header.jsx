import classNames from "classnames";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/actions/auth";
import { SET_USER } from "@/redux/types/auth";

export default function Header() {
	const dispatch = useDispatch();
	const { user, isLoggedIn = false } = useSelector((state) => state.auth);

    const handleLogin = () => {
        console.log("test")
		const payload = {
			user: {
				name: "Sourabh",
			},
			token: "asdf",
		};
		dispatch({ type: SET_USER, payload });
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
				"items-center"
			)}
		>
			<div>Logo</div>
			<div className="hidden lg:block lg:w-6/12">
				<Search />
			</div>
			<div className="flex items-center pointer">
				<FaShoppingCart />
				{isLoggedIn ? (
					<div>{user.name}</div>
				) : (
					<CustomButton onClick={handleLogin}>Login</CustomButton>
				)}
			</div>
			<div className="lg:hidden w-full mt-5">
				<Search />
			</div>
		</div>
	);
}
