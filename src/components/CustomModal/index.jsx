import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "rsuite";
import Login from "./modals/Login";
import { CLOSE_MODAL, OPEN_MODAL } from "@/redux/types/common";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

export default function CustomModal() {
	const dispatch = useDispatch();
	const router = useRouter();

	const { modal = null, modalData = null } = useSelector(
		(state) => state.common
	);

	const [open, setOpen] = useState(false);

	const onClose = () => {
		setOpen(false);
		setTimeout(() => {
			dispatch({ type: CLOSE_MODAL });
		}, 1000);
	};

	useEffect(() => {
		setOpen(!!modal);
	}, [modal]);

	useEffect(() => {
		const routerPath = router?.asPath || "";

		const formType = routerPath.includes("login")
			? "login"
			: routerPath.includes("signup")
			? "signup"
			: null;
		if (formType) {
			dispatch({
				type: OPEN_MODAL,
				payload: { modal: LOGIN_MODAL, modalData: { formType } },
			});
		}
	}, [router.asPath]);

	switch (modal) {
		case LOGIN_MODAL:
			return (
				<ModalWrapper
					component={Login}
					modalData={modalData}
					open={open}
					onClose={onClose}
					showCloseButton
				/>
			);

		default:
			return null;
	}
}

const ModalWrapper = ({
	component: Component,
	modalData,
	open = true,
	onClose,
	backdrop = true,
	showCloseButton = false,
}) => {
	return (
		<Modal open={open} onClose={onClose} backdrop={backdrop}>
			{showCloseButton && (
				<div className="flex justify-end">
					<button onClick={onClose} className="justify-end mb-3 icon-button">
						<FaTimes />
					</button>
				</div>
			)}
			<Component {...modalData} />
		</Modal>
	);
};

export const LOGIN_MODAL = "LOGIN_MODAL";
