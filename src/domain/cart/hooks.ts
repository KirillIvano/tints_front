import {useInject} from '@/di/useInject';
import {DINames} from '@/di/keys';
import {ICartStore} from '@/di/interfaces/ICartStore';
import {assertExists} from '@/util/assertions';


export const useCartStore = () =>
    useInject<ICartStore>(DINames.CART_STORE);


export const useCartItem = (productId: number) =>
    useCartStore().getCartItemById(productId);

export const useCartItemSafe = (productId: number) => {
    const cartItem = useCartItem(productId);

    assertExists(cartItem);

    return cartItem;
};
