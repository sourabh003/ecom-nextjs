import shopService from "@/redux/services/shop.service";
import { useEffect, useState } from "react";

export const useCategories = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		shopService
			.getCategories()
			.then(({ data }) => {
				setCategories([...data, ...data, ...data]);
			})
			.catch((err) => {})
			.finally(() => setIsLoading(false));
		return () => {};
	}, []);

	return { categories, isLoading };
};
