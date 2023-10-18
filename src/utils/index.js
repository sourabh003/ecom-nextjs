import axios from "axios";
import { API_BASE_URL, TOKEN } from "./constants";
import { toast } from "react-hot-toast";

export const generateURL = (endpoint) => API_BASE_URL + endpoint;

export const apiReq = (method, url, data, headers = {}) => {
	return new Promise((resolve, reject) => {
		axios({
			method,
			url,
			data,
			headers,
		})
			.then((res) => {
				const { success = false, message = "" } = res?.data || {};
				if (!success) {
					if (Array.isArray(message)) throw new Error(message[0]);
					throw new Error(message);
				}
				return resolve(res.data);
			})
			.catch((err) => {
				const errorMessage =
					err?.response?.data?.message ||
					err?.response?.data ||
					err?.message ||
					err;
				toast.error(errorMessage);
				return reject(errorMessage);
			});
	});
};

export const apiGet = (url, data = null, headers = {}) => {
	let updatedURL = !data
		? url
		: Object.keys(data).reduce((url, key, index) => {
				url = `${url}${index === 0 ? "?" : "&"}${key}=${data[key]}`;
				return url;
		  }, url);
	return apiReq("get", updatedURL, data, headers);
};

export const apiPost = (url, data, headers = {}) => {
	return apiReq("post", url, data, headers);
};

export const apiDelete = (url, data, headers = {}) => {
	const updatedURL = !data ? url : `${url}/${data}`;
	return apiReq("delete", updatedURL, data, headers);
};

export const apiPut = (url, data, headers = {}) => {
	if (!data.id) {
		return apiReq("put", url, data, headers);
	}
	const updatedURL = `${url}/${data.id}`;
	return apiReq("put", updatedURL, data.data, headers);
};

export const checkUser = () => {};

export const setData = (key, value) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(key, JSON.stringify(value));
	}
};
export const setMultipleData = (data) => {
	if (typeof window !== "undefined") {
		[...data].forEach(({ key, value }) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}
};

export const getData = (key) => {
	if (typeof window !== "undefined") {
		const data = JSON.parse(localStorage.getItem(key));
		if (data) return data;
		return null;
	}
};

export const removeData = (key) => {
	localStorage.removeItem(key);
};

export const removeMultipleData = (data) => {
	if (typeof window !== "undefined") {
		[...data].forEach((key) => {
			localStorage.removeItem(key);
		});
	}
};

export const clearLocalStorage = () => {
	localStorage.clear();
};

export const updateDynamicTitle = (path) => {
	const titles = {
		"/": "Dashboard | Ecom",
		"/products": "Products | Ecom",
		"/brands": "Brands | Ecom",
		"/categories": "Categories | Ecom",
	};
	document.title = titles[path];
};

export const dynamicTitle = (path) => {
	const titles = {
		"/": "Dashboard",
		"/products": "Products",
		"/brands": "Brands",
		"/categories": "Categories",
	};
	return titles[path];
};

export const getHeaders = () => {
	let token = getData(TOKEN);
	if (token) {
		return { token };
	}
	return {};
};

export const errorHandler = (error) => {
	return error?.message || error;
};
