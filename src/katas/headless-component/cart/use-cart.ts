import {CartContext} from "@/katas/headless-component/cart/cart-provider";
import {useContext} from "react";

const useCart = () => {
    const { totalQuantity, addToCart } = useContext(CartContext);
    return {
        totalQuantity,
        addToCart,
    }
}