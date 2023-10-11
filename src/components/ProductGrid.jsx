import React from "react";
import ProductCard from "./cards/ProductCard";
import NoProducts from "./NoProducts";

export default function ProductGrid({ list = [] }) {

	if (!list.length) return <NoProducts />;

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4">
			{[...list, ...list, ...list, ...list].map((product) => (
				<ProductCard key={product._id} {...product} />
			))}
		</div>
	);
}
