import { apiGet, apiPost, generateURL } from "../../utils";

class ShopService {
	getCategories(data) {
		return apiGet(generateURL("/categories"), data);
	}

	getProducts(data) {
		return apiGet(generateURL("/products"), data);
    }
    
    getSingleProduct(data) {
		return apiGet(generateURL(`/products/${data}`));
	}
}

export default new ShopService();
