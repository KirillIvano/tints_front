import React from 'react';
import cn from 'classnames';

import {Reference, Typo} from '@/uikit';

import css from './styles.module.scss';
import {StyledProps} from '@/util/types';


const CatalogBanner = ({className}: StyledProps) => (
    <div className={cn(css.catalogBanner, className)}>
        <div className={css.decorativeBackground}></div>
        <Reference
            className={css.catalogButton}
            href="/catalog"
        >
            <Typo
                as="span"
                color="white"
                weight="bold"
                size="lg"
            >
                В каталог
            </Typo>
        </Reference>
    </div>
);

export default CatalogBanner;
