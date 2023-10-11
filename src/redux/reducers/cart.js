import * as types from "@/redux/types/cart";

const initialState = {
	isCartDrawerOpen: false,
	cartLoading: false,
	cartItems: [],
	cartDetails: {
		subTotal: 0,
		cartId: null,
		updatedAt: null,
	},
};

export default function cartReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.TOGGLE_CART_DRAWER:
			return { ...state, isCartDrawerOpen: !state.isCartDrawerOpen };

		case types.GET_CART:
			return { ...state, cartLoading: true };

		case types.GET_CART_SUCCESS:
			return {
				...state,
				cartLoading: false,
				cartItems: payload.cartItems,
				cartDetails: {
					subTotal: payload.subTotal,
					updatedAt: payload.updatedAt,
					cartId: payload._id,
				},
			};

		case types.GET_CART_FAILED:
			return { ...state, cartLoading: false };

		// case types.ADD_ITEM_TO_CART:
		// 	return { ...state, isCartDrawerOpen: !state.isCartDrawerOpen };

		// case types.REMOVE_ITEM_FROM_CART:
		// 	return { ...state, isCartDrawerOpen: !state.isCartDrawerOpen };

		default:
			return { ...state };
	}
}
