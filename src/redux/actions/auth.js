import { SET_USER } from "../types/auth";

export const setUser = (data) => {
	return (dispatch) => {
		dispatch({ type: SET_USER, payload: data });
	};
	// return new Promise((resolve, reject) => {

	// })
};
