import React from 'react';

import {Reference, Typo} from '@/uikit';

import styles from './styles.module.scss';

const CatalogBanner = () => (
    <div className={styles.catalogBanner}>
        <div className={styles.decorativeBackground}></div>
        <Reference
            className={styles.catalogButton}
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
