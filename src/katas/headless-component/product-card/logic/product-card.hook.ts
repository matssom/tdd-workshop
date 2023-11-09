import {useProduct} from "@/katas/headless-component/products/use-product";

type UseProductCard = {
    exists: true;
    title: string;
    price: number;
    description: string;
} | {
    exists: false;
    title: undefined;
    price: undefined;
    description: undefined
}

export const useProductCard = (id: number): UseProductCard => {
    const product = useProduct(id);

    return product ? {
        exists: true,
        ...product,
    } : {
        exists: false,
        title: undefined,
        price: undefined,
        description: undefined,
    }
}