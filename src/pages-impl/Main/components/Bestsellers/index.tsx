import React from 'react';
import Slider, {Settings} from 'react-slick';

import {ProductCard} from '@/components';
import {StyledProps} from '@/util/types';
import {Typo} from '@/uikit';

import {useBestsellers} from '../../hooks/useBestsellers';
import css from './styles.module.scss';


const BESTSELLERS_SLIDER_CONFIG: Settings = {
    dots: true,
    arrows: true,
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

const BestsellersFallback = () => {
    const bestsellers = useBestsellers();

    return (
        <div className="row">
            {bestsellers.map(product => (
                <div key={product.id} className="col-xs-2 col-md-3">
                    <ProductCard {...product} />
                </div>
            ))}
        </div>
    );
};

const Bestsellers = ({className}: StyledProps) => {
    const bestsellers = useBestsellers();

    if (!bestsellers.length) return null;
    if (bestsellers.length < 4) return <BestsellersFallback />;

    return (
        <div className={className}>
            <Typo as="h2" size="lg" color="black">Бестселлеры</Typo>

            <Slider {...BESTSELLERS_SLIDER_CONFIG} className={css.relatedSlider}>
                {bestsellers.map(item => (
                    <div key={item.id} className={css.relatedItem}>
                        <ProductCard {...item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default Bestsellers;
