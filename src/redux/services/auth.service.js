import { apiPost, generateURL } from "../../utils";

class AuthService {
	userLogin(data) {
		return apiPost(generateURL("/users/login"), data);
    }
    userSignup(data) {
		return apiPost(generateURL("/users"), data);
	}
}

export default new AuthService();
