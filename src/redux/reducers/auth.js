import { setData } from "@/utils";
import * as types from "@/redux/types/auth";
import { TOKEN, USER } from "@/utils/constants";

const initialState = {
	isLoggedIn: false,
	isLoading: false,
	user: null,
};

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.SET_USER:
			setData(USER, payload);
			return { ...state, user: payload, isLoggedIn: true };

		case types.USER_LOGIN:
		case types.USER_SIGNUP:
			return { ...state, isLoading: true };

		case types.USER_LOGIN_SUCCESS:
		case types.USER_SIGNUP_SUCCESS:
			setData(TOKEN, payload.token);
			setData(USER, payload.user);
			return {
				...state,
				isLoading: false,
				user: payload.user,
				isLoggedIn: true,
			};

		case types.USER_LOGIN_FAILED:
		case types.USER_SIGNUP_FAILED:
			return { ...state, isLoading: false };

		default:
			return { ...state };
	}
}
