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
    
	getBrands() {
		return apiGet(generateURL(`/brands`));
	}
}

export default new ShopService();
