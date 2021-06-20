import React from 'react';

import {Box} from '@/uikit';

import {CatalogBanner, TipsSection, Testimonials} from './components';
import styles from './styles.module.scss';

const MainPage = () => (
    <>
        <CatalogBanner />

        <Box className={styles.main}>
            <section className={styles.main__tips}>
                <TipsSection />
            </section>
        </Box>

        <Box>
            <Testimonials />
        </Box>
    </>
);

export default MainPage;
