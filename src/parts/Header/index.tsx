import {Box} from '@/uikit';
import React from 'react';

import {Logo, Nav} from './components';
import css from './styles.module.scss';


const Header = () => (
    <header className={css.header}>
        <Box className={css.header__content}>
            <Logo className={css.header__logo} />
            <Nav className={css.header__nav} />
        </Box>
    </header>
);

export default Header;
