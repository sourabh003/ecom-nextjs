import React from "react";

export default function NoProducts() {
	return (
		<div className="w-full p-5 grid place-items-center text-center">
			<div>
				<img src="/images/empty-cart.png" className="w-48" alt="No Products" />
				<div>Woops! No products found</div>
			</div>
		</div>
	);
}
