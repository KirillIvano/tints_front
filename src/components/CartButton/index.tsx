import {useCartStore} from '@/domain/cart/hooks';
import {StyledProps} from '@/util/types';
import React from 'react';

import styles from './styles.module.scss';


export type CartButtonProps = StyledProps<{
    productId: number;
}>;

const CartButton = ({
    className,
    productId,
}: CartButtonProps) => {
    const cart = useCartStore();

    return <Button>Добавить в корзину</Button>;
};

export default CartButton;
