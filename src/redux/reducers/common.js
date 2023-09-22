import * as types from "@/redux/types/common";

const initialState = {
	modal: null,
	modalData: null,
	loader: false,
};

export default function cartReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.OPEN_MODAL:
			return { ...state, modal: payload.modal, modalData: payload.modalData };

		case types.CLOSE_MODAL:
			return { ...state, modal: null, modalData: null };

		case types.TOGGLE_GLOBAL_LOADER:
			return { ...state, loader: payload };

		default:
			return { ...state };
	}
}
