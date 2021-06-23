import React from 'react';
import Slider, {Settings} from 'react-slick';
import cn from 'classnames';

import {ProductCard, ProductImage} from '@/components';
import {getImageUrl} from '@/util/getImageUrl';
import {StyledProps} from '@/util/types';
import {Accordeon} from '@/uikit';

import {useCurrentSku} from '../../hooks/useCurrentSku';
import css from './styles.module.scss';


const RELATED_SLIDER_CONFIG: Settings = {
    centerPadding: '100px',
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: css.slides,

    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                arrows: false,
            },
        },
    ],
};

const ProductRelated = () => {
    const {related} = useCurrentSku();

    if (!related.length) return null;

    return (
        <Slider {...RELATED_SLIDER_CONFIG}>
            {related.map(item => (
                <ProductCard key={item.id} {...item} />
            ))}
        </Slider>
    );
};


export default ProductRelated;
