import React from 'react';
import cn from 'classnames';

import {Reference} from '@/uikit';
import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';


const Logo = ({className}: StyledProps) => (
    <div className={cn(className)}>
        <Reference href={'/'}>
            <img className={styles.logo} alt="Логотип" src="/logo.png" />
        </Reference>
    </div>
);

export default Logo;
