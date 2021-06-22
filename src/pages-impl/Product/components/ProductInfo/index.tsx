import {CartButton} from '@/components';
import {Typo} from '@/uikit';
import React from 'react';
import {useCurrentSku} from '../../hooks/useCurrentSku';

import css from './styles.module.scss';

const ProductInfo = () => {
    const {name, price, description, id: productId} = useCurrentSku();

    return (
        <div className={css.productInfo}>
            <Typo as="h1" size="lg" color="black">
                {name}
            </Typo>

            <Typo
                as="p"
                size="xl"
                weight="bold"
                color="black"
                className={css.price}
            >
                {price}₽
            </Typo>

            <CartButton productId={productId} className={css.cartButton} />

            <div>
                <Typo as="h2" color="black" size="md" className={css.descriptionTitle}>
                    Краткое описание
                </Typo>

                <Typo as="p" size="xs" className={css.description}>
                    {description}
                </Typo>
            </div>
        </div>
    );
};

export default ProductInfo;
