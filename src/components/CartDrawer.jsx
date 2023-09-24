import { TOGGLE_CART_DRAWER } from "@/redux/types/cart";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "rsuite";
import { isMobile } from "react-device-detect";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";

export default function CartDrawer() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isCartDrawerOpen = false } = useSelector((state) => state.cart);

	const handleClose = () => {
		dispatch({ type: TOGGLE_CART_DRAWER });
	};

	const handleCheckout = () => {
		router.push("/checkout").then(handleClose);
	};

	const subTotal = 0;

	return (
		<div className="w-full">
			<Drawer
				backdrop={true}
				open={isCartDrawerOpen}
				onClose={handleClose}
				keyboard
				autoFocus
				className="cart-sidebar"
			>
				<div className="flex flex-col relative h-full">
					<div className="flex items-center p-5">
						<button className="icon-button" onClick={handleClose}>
							<FaTimes />
						</button>
						<div className="ml-4 text-xl">Cart</div>
					</div>
					<hr className="p-0 m-0" />
					<div className="p-5 flex-grow overflow-scroll">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi repudiandae consequuntur
						voluptatum laborum numquam blanditiis harum quisquam eius sed odit
						fugiat iusto fuga praesentium optio, eaque rerum! Provident
						similique accusantium nemo autem. Veritatis obcaecati tenetur iure
						eius earum ut molest Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
						repudiandae consequuntur voluptatum laborum numquam blanditiis harum
						quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
					</div>
					<div className="p-4 bg-black text-white flex justify-between">
						<div>
							<div className="text-gray-400">Cart Subtotal</div>
							<div className="text-xl font-bold">$ {subTotal}</div>
						</div>
						<CustomButton
							onClick={handleCheckout}
							className="rounded flex items-center px-5"
						>
							Checkout <FaArrowRight className="ml-3" />
						</CustomButton>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
