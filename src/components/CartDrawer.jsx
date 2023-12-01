import { TOGGLE_CART_DRAWER } from "@/redux/types/cart";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "rsuite";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ItemCounter from "./ItemCounter";
import { updateCart } from "@/redux/actions/cart";
import toast from "react-hot-toast";
import { errorHandler } from "@/utils";

export default function CartDrawer() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isCartDrawerOpen = false, cartDetails: { subTotal = 0 }, cartDetails, cartLoading = false, cartItems = [] } = useSelector((state) => state.cart);

    const handleClose = () => {
        dispatch({ type: TOGGLE_CART_DRAWER });
    };

    const handleCheckout = () => {
        router.push("/checkout").then(handleClose);
    };

    const updateProductCount = (action, product) => {
        const { productId } = product;

        let data = [...cartItems].map(item => {
            if (item.productId !== productId) return item;

            if (action === "add") {
                item.count = item.count + 1
            }

            if (action === "sub") {
                item.count = item.count - 1
            }
            return item;
        })
        updateCartLocal(data)
    }

    const removeProduct = (product) => {
        const { productId } = product;
        let data = [...cartItems].filter(item => (item.productId !== productId))
        updateCartLocal(data)
    }


    const updateCartLocal = (cartItems) => {
        dispatch(updateCart({ cartItems })).then(message => {
            toast.success(message)
        }).catch(err => {
            toast.error(errorHandler(err))
        })
    }

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
                        {cartItems.length === 0 ? (
                            <div className="grid place-items-center items-center">
                                <img src="/images/empty-cart.png" alt="Empty Cart" className="w-2/4" />
                                <div>Your cart seems to be empty</div>
                            </div>
                        ) : (
                            <div className="">
                                {cartItems.map(product => (
                                    <MiniProductCards
                                        product={product}
                                        addClickListener={() => updateProductCount('add', product)}
                                        subClickListener={() => updateProductCount('sub', product)}
                                        removeClickListener={() => removeProduct(product)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="p-4 bg-black text-white flex justify-between">
                        <div>
                            <div className="text-gray-400">Cart Subtotal</div>
                            <div className="text-xl font-bold">$ {subTotal}</div>
                        </div>
                        <CustomButton
                            disabled={cartItems.length === 0}
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

const MiniProductCards = ({
    product: {
        thumbnail = "",
        name = "",
        price = 100,
        brand: { name: brandName },
        count
    },
    addClickListener,
    subClickListener,
    removeClickListener,
}) => {
    return (<div className="border border-solid mt-5 first:mt-0 rounded p-2 flex">
        <img src={thumbnail} alt={name} className="w-20" />
        <div className="ml-3 w-full grid">
            <div className="">
                <div className="text-lg">{name}</div>
                <div className="text-md">{brandName}</div>
            </div>
            <div className="flex w-full mt-3 items-center justify-between">
                <div className="bg-gray-100 rounded p-1">
                    <ItemCounter
                        value={count}
                        addClickListener={addClickListener}
                        subClickListener={subClickListener}
                        removeClickListener={removeClickListener}
                    />
                </div>
                <div className="text-xl text-primary font-bold">${price}</div>
            </div>
        </div>
    </div>)
}