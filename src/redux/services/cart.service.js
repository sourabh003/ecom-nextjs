import { apiGet, generateURL, getHeaders } from "../../utils";

class ShopService {
	getCart(data) {
		return apiGet(generateURL("/carts"), data, getHeaders());
	}
}

export default new ShopService();
