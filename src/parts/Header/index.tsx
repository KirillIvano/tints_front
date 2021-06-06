import {Box} from '@/uikit';
import React from 'react';

import {Logo, Nav} from './components';
import styles from './styles.module.scss';


const Header = () => (
    <header className={styles.header}>
        <Box className={styles.header__content}>
            <Logo className={styles.header__logo} />
            <Nav />
        </Box>
    </header>
);

export default Header;
