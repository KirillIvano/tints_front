import {Box} from '@/uikit';
import React, {useState} from 'react';
import cn from 'classnames';

import {Logo, Nav, MobileMenu} from './components';
import {Context} from './components/Context/index';

import css from './styles.module.scss';


const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Context.Provider value={{visible, setVisible}}>
            <header className={cn(css.header, (visible ? css.active : ''))}>
                <Box className={css.header__content}>
                    <Logo className={css.header__logo} />
                    <Nav className={cn(css.header__nav, (visible ? css.active : ''))} />
                    <MobileMenu className={css.header__mobile_menu} />
                </Box>
            </header>
        </Context.Provider>
    );
};

export default Header;
