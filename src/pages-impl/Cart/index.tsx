import {observer} from 'mobx-react-lite';

import {Box, Typo} from '@/uikit';
import {useCartStore} from '@/domain/cart/hooks';
import {CartPageProps} from '@/pages/cart';
import {useSyncEffect} from '@/hooks/useSyncEffect';
import {useProductStore} from '@/domain/product/hooks';

import {CartItems, CartTotals, EmptyCart, Checkout} from './components';
import css from './styles.module.scss';


const CartPageBase = observer(() => {
    const cart = useCartStore();

    // TODO: preloader
    if (!cart.isInitialized) return null;
    if (cart.itemsCount === 0) return <EmptyCart />;

    return (
        <Box className={css.cartPage}>
            <Typo
                size="xl"
                color="black"
                as="h1"
                className={css.heading}
            >
                Корзина
            </Typo>

            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <CartItems />
                </div>
                <div className={`col-xs-12 col-md-offset-1 col-md-3 ${css.cartInfo}`}>
                    <CartTotals />
                    <Checkout className={css.checkout} />
                </div>
            </div>
        </Box>
    );
});

const CartPage = ({previews}: CartPageProps) => {
    const productsStore = useProductStore();

    useSyncEffect(() => {
        productsStore.hydratePreviews(previews);
    }, [productsStore, previews]);

    return <CartPageBase />;
};

export default CartPage;
