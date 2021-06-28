import {useCartStore} from '@/domain/cart/hooks';
import {useProductStore} from '@/domain/product/hooks';
import {Typo} from '@/uikit';
import {StyledProps} from '@/util/types';
import {observer} from 'mobx-react-lite';

import css from './styles.module.scss';

const CartTotals = observer(({className}: StyledProps) => {
    const cartStore = useCartStore();
    const productStore = useProductStore();

    const totalPrice = cartStore.cartItems.reduce((acc, {productId, productsCount}) => {
        const productPrice = productStore.getProductPreviewById(productId)?.price ?? 0;

        return acc + productsCount * productPrice;
    }, 0);

    return (
        <div className={className}>
            <Typo as="h2" size="lg" color="black">Итог</Typo>
            <Typo
                as="p"
                size="md"
                color="black"
                className={css.totals}
            >
                {cartStore.itemsCount} товаров на {totalPrice}₽
            </Typo>
        </div>
    );
});

export default CartTotals;
