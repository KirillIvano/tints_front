import React from 'react';

import {Box} from '@/uikit';

import {TipsSection} from './components';
import styles from './styles.module.scss';

const MainPage = () => (
    <Box className={styles.main}>
        <section className={styles.main__tips}>
            <TipsSection />
        </section>
    </Box>
);

export default MainPage;
