import { apiGet, apiPost, generateURL } from "../../utils";

class ShopService {
	getCategories(data) {
		return apiGet(generateURL("/categories"), data);
	}
}

export default new ShopService();
