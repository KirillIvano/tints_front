import {CartItemType} from '@/domain/cart/types';

export interface ICartStore {
    cartItems: CartItemType[];
    itemsCount: number;

    getItemCount: (productId: number) => number | undefined;
    getCartItemById: (productId: number) => CartItemType | undefined;
    addProductToCart: (productId: number) => void;
    clearCart:  () => void;
    removeCartItem: (productId: number) => void;
    updateProductCount: (productId: number, currency: number) => void;
    initCart: () => void;
}
