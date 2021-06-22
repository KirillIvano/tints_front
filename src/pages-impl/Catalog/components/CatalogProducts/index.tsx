import React from 'react';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import {StyledProps} from '@/util/types';
import {ProductCard} from '@/components';

import {useCatalogStore} from '../../hooks/useCatalogStore';
import css from './styles.module.scss';
import {CatalogEmpty} from '..';


const CatalogProducts = observer(({className}: StyledProps) => {
    const {assortment} = useCatalogStore();

    if (!assortment.length) return <CatalogEmpty />;

    return (
        <div className={cn(className, css.products, 'row')}>
            {assortment.map(product => (
                <div
                    className={cn(css.product, 'col-md-4 col-xs-6')}
                    key={product.id}
                >
                    <ProductCard {...product} />
                </div>
            ))}
        </div>
    );
});

export default CatalogProducts;
