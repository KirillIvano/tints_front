import React from 'react';
import Slider, {Settings} from 'react-slick';
import {observer} from 'mobx-react-lite';

import {ProductCard} from '@/components';
import {StyledProps} from '@/util/types';
import {Typo} from '@/uikit';

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

const ProductRelated = observer(({className}: StyledProps) => {
    const {related} = useCurrentSku();

    if (!related.length) return null;

    return (
        <div className={className}>
            <Typo as="h2" size="md" color="black" >Рекомендуем</Typo>

            <Slider {...RELATED_SLIDER_CONFIG} className={css.relatedSlider}>
                {related.map(item => (
                    <div key={item.id} className={css.relatedItem}>
                        <ProductCard {...item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
});


export default ProductRelated;
