import { setData } from "@/utils";
import * as types from "@/redux/types/auth";
import { TOKEN } from "@/utils/constants";

const initialState = {
	isLoggedIn: false,
	isLoading: false,
	user: null,
};

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.SET_USER:
			setData(TOKEN, payload.token);
			return { ...state, user: payload.user, isLoggedIn: true };

		case types.USER_LOGIN:
			return { ...state, isLoading: true };

		case types.USER_LOGIN_SUCCESS:
			setData(TOKEN, payload.token);
			return {
				...state,
				isLoading: false,
				user: payload.user,
				isLoggedIn: true,
			};

		case types.USER_LOGIN_FAILED:
			return { ...state, isLoading: false };

		default:
			return { ...state };
	}
}
