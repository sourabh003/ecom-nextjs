import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "rsuite";
import Login from "./modals/Login";
import { CLOSE_MODAL } from "@/redux/types/common";
import { FaTimes } from "react-icons/fa";

export default function CustomModal() {
	const dispatch = useDispatch();
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
				<button
					onClick={onClose}
					className="flex w-full justify-end mb-3 pointer"
				>
					<FaTimes />
				</button>
			)}
			<Component modalData={modalData} />
		</Modal>
	);
};

export const LOGIN_MODAL = "LOGIN_MODAL";
