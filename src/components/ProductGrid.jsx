import React from "react";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";

export default function ProductGrid({ list = [] }) {

	if (!list.length) return <NoProducts />;

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
			{[...list, ...list, ...list, ...list].map((product) => (
				<ProductCard {...product} />
			))}
		</div>
	);
}
