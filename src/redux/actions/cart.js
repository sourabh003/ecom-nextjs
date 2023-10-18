import cartService from "../services/cart.service";
import * as types from "../types/cart";

export const getCart = () => {
	return async (dispatch) => {
		dispatch({ type: types.GET_CART });
		try {
			const { data } = await cartService.getCart();
			dispatch({ type: types.GET_CART_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: types.GET_CART_FAILED });
			throw new Error(error);
		}
	};
};

export const updateCart = (data) => {
	return async (dispatch) => {
		dispatch({ type: types.UPDATE_CART });
		try {
			const { data: resultCart, message = "" } = await cartService.updateCart(
				data
			);
			dispatch({ type: types.UPDATE_CART_SUCCESS, payload: resultCart });
			return message;
		} catch (error) {
			dispatch({ type: types.UPDATE_CART_FAILED });
			throw new Error(error);
			return error;
		}
	};
};

// export const removeItemFromCart = (id) => {
// 	return (dispatch) => {
// 		dispatch({ type: types.ADD_ITEM_TO_CART, payload: id });
// 	};
// };
