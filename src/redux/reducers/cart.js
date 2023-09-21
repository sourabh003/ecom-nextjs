import * as types from "@/redux/types/cart";

const initialState = {
	isCartDrawerOpen: false,
};

export default function cartReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.TOGGLE_CART_DRAWER:
			return { ...state, isCartDrawerOpen: !state.isCartDrawerOpen };

		default:
			return { ...state };
	}
}
