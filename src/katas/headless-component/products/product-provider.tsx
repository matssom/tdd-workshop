import React from "react";

type Product = { id: number, price: number, title: string, description: string };

type ProductProviderProps = {
    products: Product[];
    children: React.ReactNode;
}

export const ProductContext = React.createContext<Product[]>([]);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children, products }) => {
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
}