import cartService from "../services/cart.service";
import * as types from "../types/cart";

export const getCart = () => {
	return (dispatch) => {
		dispatch({ type: types.GET_CART });
		return new Promise((resolve, reject) => {
			cartService
				.getCart()
				.then((data) => {
					dispatch({ type: types.GET_CART_SUCCESS, payload: data });
					return resolve(data);
				})
				.catch((err) => {
					dispatch({ type: types.GET_CART_FAILED });
					return reject(err);
				});
		});
	};
};

export const addItemToCart = (item) => {
	return (dispatch) => {
		dispatch({ type: types.ADD_ITEM_TO_CART, payload: item });
	};
};

export const removeItemFromCart = (id) => {
	return (dispatch) => {
		dispatch({ type: types.ADD_ITEM_TO_CART, payload: id });
	};
};
