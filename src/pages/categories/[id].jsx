import shopService from "@/redux/services/shop.service";
import React, { useEffect } from "react";

export default function SingleCategoryPage({ products = [] }) {
	useEffect(() => {
		console.log({ products });
	}, [products]);
	return <div>SingleCategoryPage</div>;
}

export const getServerSideProps = async (ctx) => {
	const id = ctx.query.id;
	const { data: products = [] } = await shopService.getProducts({
		categoryId: id,
	});
	return { props: { products } };
};
