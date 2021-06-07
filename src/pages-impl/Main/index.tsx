import React from 'react';

import {Box} from '@/uikit';

import {CatalogBanner, TipsSection} from './components';
import styles from './styles.module.scss';

const MainPage = () => (
    <>
        <section>
            <CatalogBanner />
        </section>

        <Box>
            <section className={styles.main__tips}>
                <TipsSection />
            </section>
        </Box>
    </>
);

export default MainPage;
