import { apiGet, apiPut, generateURL, getHeaders } from "../../utils";

class ShopService {
	getCart(data) {
		return apiGet(generateURL("/carts"), data, getHeaders());
    }
    
    updateCart(data) {
		return apiPut(generateURL("/carts"), data, getHeaders());
	}
}

export default new ShopService();
