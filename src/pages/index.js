import BrandCarousel from "@/components/shop/BrandCarousel";
import CategoryCarousel from "@/components/shop/CategoryCarousel";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		document.title = "Home | Ecom Shopping Store";
	}, []);

	return (
		<div className="xl:mx-48">
			<CategoryCarousel />
			<BrandCarousel />
		</div>
	);
}
