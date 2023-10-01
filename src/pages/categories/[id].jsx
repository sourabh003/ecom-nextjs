import ProductGrid from "@/components/ProductGrid";
import shopService from "@/redux/services/shop.service";
import { useEffect } from "react";

export default function SingleCategoryPage({ products = [] }) {
	useEffect(() => {
		console.log({ products });
	}, [products]);
	return (
		<div>
			<ProductGrid list={products} />
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const id = ctx.query.id;
	const { data: products = [] } = await shopService.getProducts({
		categoryId: id,
	});
	return { props: { products } };
};
