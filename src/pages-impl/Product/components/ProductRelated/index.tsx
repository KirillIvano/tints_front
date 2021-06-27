import React from 'react';
import {observer} from 'mobx-react-lite';

import {ProductCard} from '@/components';
import {StyledProps} from '@/util/types';
import {Typo} from '@/uikit';

import {useCurrentSku} from '../../hooks/useCurrentSku';
import css from './styles.module.scss';


const ProductRelated = observer(({className}: StyledProps) => {
    const {related} = useCurrentSku();

    if (!related.length) return null;

    return (
        <div className={className}>
            <Typo as="h2" size="md" color="black" >Рекомендуем</Typo>

            <div className={`row ${css.relatedSlider}`}>
                {related.slice(0, 4).map(product => (
                    <div key={product.id} className={`col-xs-2 col-md-3 ${css.relatedItem}`}>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
});


export default ProductRelated;
