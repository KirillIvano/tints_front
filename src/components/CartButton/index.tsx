import React from 'react';

import {useCartItemSafe, useCartStore} from '@/domain/cart/hooks';
import {Button} from '@/uikit';
import {StyledProps} from '@/util/types';
import NumberInput from '@/uikit/NumberInput';
import {observer} from 'mobx-react-lite';


export type CartButtonProps = StyledProps<{
    productId: number;
}>;

const CartNumberInput = observer(({
    productId,
}: {productId: number}) => {
    const cart = useCartStore();
    const cartItem = useCartItemSafe(productId);
    const {productsCount} = cartItem;

    const handleInc = () => cart.updateProductCount(productId, productsCount + 1);
    const handleDec = () => {
        if (productsCount <= 1) {
            cart.removeCartItem(productId);
        } else {
            cart.updateProductCount(productId, productsCount - 1);
        }
    };
    const handleChange = (val: string) => {
        cart.updateProductCount(productId, parseInt(val));
    };
    const handleBlur = () => {
        if (!productsCount) {
            cart.updateProductCount(productId, 1);
        }
    };

    return (
        <NumberInput
            value={cartItem.productsCount}
            handleInc={handleInc}
            handleDec={handleDec}
            handleChange={handleChange}
            onBlur={handleBlur}
        />
    );
});

const CartButton = observer(({
    className,
    productId,
}: CartButtonProps) => {
    const cart = useCartStore();

    const isInCart = cart.getCartItemById(productId);

    const handleClick = () => {
        cart.addProductToCart(productId);
    };

    return isInCart ? (
        <CartNumberInput productId={productId} />
    ) : (
        <Button
            className={className}
            onClick={handleClick}
        >
            В корзину
        </Button>
    );
});

export default CartButton;
