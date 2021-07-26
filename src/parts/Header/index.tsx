import {Box} from '@/uikit';
import React, {useState} from 'react';
import cn from 'classnames';

import {Logo, Nav, MobileMenu} from './components';
import {Context} from './components/Context/index';

import css from './styles.module.scss';


const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <Context.Provider value={{isMenuVisible, setMenuVisible}}>
            <header className={cn(css.header, (isMenuVisible ? css.active : ''))}>
                <Box className={css.header__content}>
                    <Logo className={css.header__logo} />
                    <Nav className={cn(css.header__nav, (isMenuVisible ? css.active : ''))} />
                    <MobileMenu className={css.header__mobile_menu} />
                </Box>
            </header>
        </Context.Provider>
    );
};

export default Header;
