import {useProductCard} from "@/katas/headless-component/product-card/logic/product-card.hook";

type ProductCardProps = {
    id: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ id }) => {
    const {
        title,
        description,
        price
    } = useProductCard(id);

    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <p className="">kr {price},-</p>
        </div>
    )
}

export default ProductCard;