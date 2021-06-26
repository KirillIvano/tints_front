import React from 'react';
import Slider, {Settings} from 'react-slick';
import cn from 'classnames';

import {ProductImage} from '@/components';
import {getImageUrl} from '@/util/getImageUrl';
import {StyledProps} from '@/util/types';

import {useCurrentSku} from '../../hooks/useCurrentSku';
import css from './styles.module.scss';
import {observer} from 'mobx-react-lite';


const PRODUCT_IMAGE_SLIDER_CONFIG: Settings = {
    centerPadding: '100px',
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: css.slides,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                arrows: false,
            },
        },
    ],
};

const ProductImages = observer(({className}: StyledProps) => {
    const {images} = useCurrentSku();

    return (
        <div className={cn(className, css.container)}>
            <Slider {...PRODUCT_IMAGE_SLIDER_CONFIG}>
                {images.map(image => (
                    <ProductImage key={image} src={getImageUrl(image)} />
                ))}
            </Slider>
        </div>
    );
});

export default ProductImages;
