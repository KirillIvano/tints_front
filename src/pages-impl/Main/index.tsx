import React from 'react';

import {Box} from '@/uikit';

import {CatalogBanner, TipsSection, Testimonials} from './components';
import styles from './styles.module.scss';

const MainPage = () => (
    <>
        <CatalogBanner />
        {/*
        <Box >
            <div className={styles.main__tips}>
                <TipsSection />
            </div>
        </Box> */}

        <Box>
            <Testimonials />
        </Box>
    </>
);

export default MainPage;
