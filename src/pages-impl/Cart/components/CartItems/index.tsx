import React from 'react';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import {StyledProps} from '@/util/types';
import {ProductCard} from '@/components';
import {Typo} from '@/uikit';
import {useProductPreviewSafe} from '@/domain/product/hooks';
import {useCartStore} from '@/domain/cart/hooks';

import css from './styles.module.scss';


type CartItemProps = StyledProps<{
    productId: number;
    productsCount: number;
}>;

const CartItem = observer(({
    productId,
    productsCount,
}: CartItemProps) => {
    const product = useProductPreviewSafe(productId);
    const totalPrice = product.price * productsCount;

    return (
        <div className={cn('col-md-4', 'col-xs-6')}>
            <div className={css.cartItem}>
                <ProductCard {...product} />

                <Typo
                    as="p"
                    size="xl"
                    color="black"
                    weight="bold"
                    className={css.totalPrice}
                >
                    {totalPrice}₽
                </Typo>
            </div>
        </div>
    );
});


const CatalogProducts = observer(({className}: StyledProps) => {
    const cartStore = useCartStore();

    return (
        <div className={cn(className, css.products, 'row')}>
            {cartStore.cartItems.map(item => <CartItem key={item.productId} {...item} />)}
        </div>
    );
});

export default CatalogProducts;
