import React from 'react';

import {Box, Typo} from '@/uikit';

import {Tips} from './components';
import styles from './styles.module.scss';

const AdvicePage = () => (
    <Box className={styles.main}>
        <Typo
            as="h1"
            color="black"
            size="xxl"
            weight="normal"
        >
            Советы
        </Typo>

        <div className={styles.subtitle}>
            <Typo
                as="p"
                color="black"
                size="sm"
                weight='normal'
            >
                Прочитайте наши советы, чтобы вы могли достичь самых лучших результатов с нашими продуктами.
            </Typo>
        </div>

        <section className={styles.main__tips}>
            <Tips />
        </section>
    </Box>
);

export default AdvicePage;
