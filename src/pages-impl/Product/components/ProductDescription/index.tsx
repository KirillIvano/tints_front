import React from 'react';
import {observer} from 'mobx-react-lite';

import {StyledProps} from '@/util/types';
import {Accordeon} from '@/uikit';

import {useCurrentSku} from '../../hooks/useCurrentSku';
import css from './styles.module.scss';


const ProductDescription = observer(({className}: StyledProps) => {
    const {info} = useCurrentSku();

    if (!info.length) return null;

    return (
        <div className={className}>
            {info.map(item => (
                <Accordeon {...item} className={css.infoItem} key={item.title} />
            ))}
        </div>
    );
});


export default ProductDescription;
