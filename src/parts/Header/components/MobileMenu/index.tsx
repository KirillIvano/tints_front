import {StyledProps} from '@/util/types';
import React, {useContext} from 'react';
import {Context} from '../Context/index';
import css from './styles.module.scss';

const Menu = ({className}: StyledProps) => {
    const {visible, setVisible} = useContext(Context);
    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={className} onClick={handleClick}>
            <div className={css.header__button}>
                <span />
            </div>
        </div>
    );
};

export default Menu;
