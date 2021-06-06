import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';


const Logo = ({className}: StyledProps) => (
    <div className={classnames(className)}>
        <Link href={'/'}>
            <img className={styles.logo} alt="Логотип" src="/logo.png" />
        </Link>
    </div>
);

export default Logo;
