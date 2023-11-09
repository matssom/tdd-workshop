import React, {useState} from "react";

type Product = { id: number, price: number, title: string, description: string };

type ProductProviderProps = {
    products: Product[];
    children: React.ReactNode;
}

export const CartContext = React.createContext<{
    addToCart(product: Product, quantity?: number): void;
    totalQuantity: number;
}>({
    addToCart: () => {},
    totalQuantity: 0
});

export const CartProvider: React.FC<ProductProviderProps> = ({ children, products }) => {

    const [totalQuantity, setQuantity] = useState(0);

    const addToCart = (product: Product, quantiy = 1) => {
        setQuantity(totalQuantity + quantiy);
    }

    return (
        <CartContext.Provider value={{ addToCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
}