import classNames from "classnames";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";

/**
 * 
 * 
 * {
    "brand": {
        "_id": "64973a56e055948b3663992e",
        "name": "Apple"
    },
    "category": {
        "_id": "649738d5ca10e43db19442bc",
        "name": "Mobiles"
    },
    "_id": "64cbe644af9f124c631b04c0",
    "name": "iPhone 12 Mini",
    "slug": "iphone-12-mini",
    "thumbnail": "http://res.cloudinary.com/du1mbqli6/image/upload/v1691084350/ecom/pz4nje5wt0zyklijj2mm.png",
    "images": [
        "http://res.cloudinary.com/du1mbqli6/image/upload/v1691084347/ecom/mmjyvveg66nborwvbbfj.jpg",
        "http://res.cloudinary.com/du1mbqli6/image/upload/v1691084348/ecom/dwcc0yvknnvih6raslt8.jpg"
    ],
    "description": "iPhone 12 Mini description",
    "attributes": {
        "Model Name": "iPhone 12"
    },
    "__v": 0
}
 * 
 */

export default function ProductCard({
	brand,
	category,
	_id,
	name,
	slug,
	thumbnail,
	images = [],
	description,
	attributes,
	price = "100",
	discount = {
		discountPrice: "50",
		totalDiscount: 50,
	},
}) {
	const [isFavourite, toggleFavourite] = useState(false);
	const [isAnimation, triggerAnimation] = useState(false);

	const router = useRouter();

	const addToFavourites = () => {
		toggleFavourite((prev) => !prev);
		triggerAnimation(true);
		setTimeout(() => {
			triggerAnimation(false);
		}, 500);
	};

	return (
		<div
			onClick={() => router.push(`/products/${_id}`)}
			className="border-solid border p-2 m-2 flex md:flex-col hover:shadow rounded-lg pointer relative"
		>
			<button
				onClick={addToFavourites}
				className="w-fit p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition 300 pointer last:mr-0 absolute right-2 top-2 z-30"
			>
				<FaHeart
					className={classNames({
						"text-red-500": isFavourite,
						"animate-ping duration-200": isAnimation,
					})}
				/>
			</button>
			<div className="mr-2 md:mr-0 w-1/3 md:w-full grid md:place-items-center md:flex-1 justify-center p-3 transition duration-500 transform hover:scale-105">
				<img src={thumbnail} alt={name} className="w-full h-auto" />
			</div>
			<div className="w-2/3 p-2 md:mt-4 md:w-full">
				<div className="text-lg font-bold">{name}</div>
				<div className="text-gray-400">{brand.name}</div>

				<div className="mt-4 flex items-center justify-between">
					{discount ? (
						<>
							<div className="text-primary mr-3">
								{discount.totalDiscount}% discount
							</div>
							<div className="flex items-center">
								<div className="text-gray-400 mr-3 text-xl">
									<strike>${price}</strike>
								</div>
								<div className="font-bold text-xl">
									${discount.discountPrice}
								</div>
							</div>
						</>
					) : (
						<div className="flex items-center">
							<div className="font-bold text-xl">${price}</div>
						</div>
					)}
				</div>

				<div className="w-full flex justify-end">
					<CustomButton
						variant="dark"
						className="p-3 w-full rounded-lg mt-3 text-gray-100"
					>
						Add to Cart
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
