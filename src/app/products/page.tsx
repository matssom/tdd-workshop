"use client";
import {ProductProvider} from "@/katas/headless-component/products/product-provider";
import ProductCard from "@/katas/headless-component/product-card/presentation/product-card";
import {CartProvider} from "@/katas/headless-component/cart/cart-provider";

const Page = () => {
    return (
        <ProductProvider products={products}>
            <CartProvider products={products}>
                <div className="flex gap-7 p-12">
                    <ProductCard id={1} />
                    <ProductCard id={2} />
                    <ProductCard id={3} />
                </div>
            </CartProvider>
        </ProductProvider>
    )
}

const products = [
    {id: 1, price: 100, title: "Miniprojector", description: "Ganske billig på Alibaba"},
    {id: 2, price: 200, title: "Utepeis", description: "Du må sitte veldig nærme for å få noe varme"},
    {id: 3, price: 1500, title: "Stekepanne", description: "En paddeflat panne"},
];

export default Page;