import {useContext} from "react";
import {ProductContext} from "@/katas/headless-component/products/product-provider";

export const useProduct = (id: number) => {
    const products = useContext(ProductContext);
    return products.find(product => product.id === id);
}