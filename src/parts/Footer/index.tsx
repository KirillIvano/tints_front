import React from 'react';
import {Box} from '@/uikit';

import {NewsLetter, Social} from './components';

import styles from './styles.module.scss';


const Footer = () => (
    <footer className={styles.footer}>
        <Box className={styles.main}>
            <div className="row">
                <NewsLetter />
                <Social />
            </div>
        </Box>
    </footer>
);

export default Footer;
