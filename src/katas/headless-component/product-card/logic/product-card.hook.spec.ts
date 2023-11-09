import {useProductCard} from "@/katas/headless-component/product-card/logic/product-card.hook";
import {renderHook} from '@testing-library/react';
import {useProduct} from "@/katas/headless-component/products/use-product";

jest.mock("../../products/use-product");
const useProductMock = useProduct as jest.MockedFn<typeof useProduct>;

describe("useProductCard", () => {
    it('should find existing product', () => {
        // Given
        useProductMock.mockReturnValue({
            id: 1,
            title: "Miniprojector",
            price: 600,
            description: "A small projector that you can find on Alibaba for 600",
        });

        // When
        const {result} = renderHook(() => useProductCard(1));

        // Then
        expect(result.current.exists).toEqual(true);
    });

    it('should not find non-existing product', () => {
        // Given
        useProductMock.mockReturnValue(undefined);

        // When
        const {result} = renderHook(() => useProductCard(1));

        // Then
        expect(result.current.exists).toEqual(false);
    });

    it('should have the correct title', () => {
        // Given
        useProductMock.mockReturnValue({
            id: 1,
            title: "Miniprojector",
            price: 600,
            description: "A small projector that you can find on Alibaba for 600",
        })

        // When
        const {result} = renderHook(() => useProductCard(1));

        // Then
        expect(result.current.title).toEqual("Miniprojector");
    });

    it('should have the correct price', () => {
        // Given
        useProductMock.mockReturnValue({
            id: 1,
            title: "Miniprojector",
            price: 600,
            description: "A small projector that you can find on Alibaba for 600",
        })

        // When
        const {result} = renderHook(() => useProductCard(1));

        // Then
        expect(result.current.price).toEqual(600);
    });

    it('should have the correct description', () => {
        // Given
        useProductMock.mockReturnValue({
            id: 1,
            title: "Miniprojector",
            price: 600,
            description: "A small projector that you can find on Alibaba for 600",
        });

        // When
        const {result} = renderHook(() => useProductCard(1));

        // Then
        expect(result.current.description).toEqual("A small projector that you can find on Alibaba for 600");
    });
});