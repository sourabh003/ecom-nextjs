import * as types from "../types/auth";
import authService from "../services/auth.service";

export const userLogin = (data) => {
	return (dispatch) => {
		dispatch({ type: types.USER_LOGIN });
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const { message = "", data: responseData } =
						await authService.userLogin(data);
					dispatch({
						type: types.USER_LOGIN_SUCCESS,
						payload: { ...responseData },
					});
					return resolve(message);
				} catch (error) {
					dispatch({ type: types.USER_LOGIN_FAILED });
					return reject(error?.message || error);
				}
			})();
		});
	};
};

export const userSignup = (data) => {
	return (dispatch) => {
		dispatch({ type: types.USER_SIGNUP });
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const { message = "", data: responseData } =
						await authService.userSignup(data);
					dispatch({
						type: types.USER_SIGNUP_SUCCESS,
						payload: { ...responseData },
					});
					return resolve(message);
				} catch (error) {
					dispatch({ type: types.USER_SIGNUP_FAILED });
					return reject(error?.message || error);
				}
			})();
		});
	};
};
