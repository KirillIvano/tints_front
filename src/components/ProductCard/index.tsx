import React, {MouseEvent} from 'react';

import {Reference, Typo} from '@/uikit';
import {getImageUrl} from '@/util/getImageUrl';

import {ProductImage, CartButton} from '..';
import css from './styles.module.scss';


export type ProductPreviewProps = {
    id: number;
    image: string;
    name: string;
    price: number;
}

const ProductCard = ({
    id,
    name,
    image,
    price,
}: ProductPreviewProps) => {
    const handleButtonClick = (e: MouseEvent) => {
        // Так как у меня юзается реальная ссылка, event успевает до неё дойти,
        // прежде чем react это может обработать, поэтому тут отменяем поведение ссылки
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <Reference href={`/product/${id}`} className={css.productCard}>
            <div className={css.cardContent}>
                <ProductImage src={getImageUrl(image)} />

                <Typo
                    as="p"
                    size="lg"
                    weight="bold"
                    className={css.productPrice}
                >
                    {price}₽
                </Typo>

                <Typo
                    as="p"
                    size="sm"
                    className={css.productName}
                >
                    {name}
                </Typo>
            </div>

            <div
                onClick={handleButtonClick}
                className={css.buttonWrapper}
            >
                <CartButton productId={id} />
            </div>
        </Reference>
    );
};

export default ProductCard;
