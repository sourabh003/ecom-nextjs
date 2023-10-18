import React, { useState } from "react";
import ProductCard from "./cards/ProductCard";
import NoProducts from "./NoProducts";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { errorHandler } from "@/utils";
import { updateCart } from "@/redux/actions/cart";
import { TOGGLE_CART_DRAWER } from "@/redux/types/cart";

export default function ProductGrid({ list = [] }) {
    const dispatch = useDispatch()
    const [productLoading, setProductLoading] = useState(null)

    const {
        isCartDrawerOpen = false,
        cartDetails: { subTotal = 0 },
        cartDetails,
        cartLoading = false,
        cartItems = []
    } = useSelector((state) => state.cart);

    const addToFavouritesHandler = () => {

    }

    const addToCartHandler = async (e) => {
        e.stopPropagation()
        const { id: productId } = e.target
        setProductLoading(productId)

        let data = {
            cartItems: [
                ...cartItems,
                {
                    productId,
                    count: 1,
                }
            ]
        }
        dispatch(updateCart(data)).then((message) => {
            toast.success(message)
            dispatch({ type: TOGGLE_CART_DRAWER })
        }).catch(err => {
            toast.error(errorHandler(err))
        }).finally(() => setProductLoading(null))
    }

    if (!list.length) return <NoProducts />;


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {[...list, ...list, ...list, ...list].map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    addToCartHandler={addToCartHandler}
                    addToFavouritesHandler={addToFavouritesHandler}
                    isLoading={productLoading}
                />
            ))}
        </div>
    );
}
