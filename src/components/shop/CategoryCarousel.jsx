import { useCategories } from "@/hooks/useShop";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton";

export default function CategoryCarousel() {
	const { categories = [], isLoading = true } = useCategories();
	const router = useRouter();

	useEffect(() => {
		console.log({ categories, isLoading });
	}, [categories, isLoading]);

	return (
		<div className="w-100 border border-solid m-5">
			<div className="flex lg:justify-center overflow-x-scroll lg:overflow-hidden">
				{categories?.map(({ icon, name, _id }) => (
					<div
						onClick={() => router.push(`/categories/${_id}`)}
						className="grid place-items-center mr-2 md:mr-5 last:mr-0 pointer hover:shadow p-4 transition 300 hover:bg-gray-200"
					>
						<img className="w-10 md:w-20" src={icon} alt="name" />
						<div className="text-sm mt-4 md:text-lg">{name}</div>
					</div>
				))}
			</div>
		</div>
	);
}
