import CustomButton from "@/components/CustomButton";
import { USER_LOGOUT } from "@/redux/types/auth";
import { CLOSE_MODAL } from "@/redux/types/common";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Logout({ onClose }) {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		try {
			dispatch({ type: USER_LOGOUT });
			dispatch({ type: CLOSE_MODAL });
			if (router.pathname !== "/") router.replace("/");
			toast.success("Logged Out");
		} catch (error) {
			toast.error(error?.message || error);
		}
	};
	return (
		<div>
			<div className="text-xl text-center">
				Are you sure you want to Logout ?
			</div>
			<div className="flex justify-center mt-10">
				<CustomButton
					variant="secondary"
					onClick={onClose}
					className="rounded flex items-center px-5 py-2 w-6/12"
				>
					No
				</CustomButton>

				<CustomButton
					variant="dark"
					onClick={handleLogout}
					className="rounded flex items-center px-5 ml-5 py-2 w-6/12"
				>
					Yes
				</CustomButton>
			</div>
		</div>
	);
}
