import React from 'react';

import {Box, Typo} from '@/uikit';

import styles from './styles.module.scss';


const Footer = () => (
    <footer className={styles.footer}>
        <Box>
            <Typo color="white">Подпишитесь на нашу рассылку</Typo>
        </Box>
    </footer>
);

export default Footer;
