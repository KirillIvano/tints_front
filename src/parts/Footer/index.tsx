import React from 'react';

import cn from 'classnames';

import {Box} from '@/uikit';
import {NewsLetter, Social} from './components';

import styles from './styles.module.scss';


const Footer = () => (
    <footer className={styles.footer}>
        <Box className={styles.main}>
            <div className="row">
                <div className={cn(styles.newsletter, 'col-lg-6 col-md-8')}>
                    <NewsLetter />
                </div>
                <div className={cn(styles.social, 'col-md-4 col-lg-3 col-lg-offset-3')}>
                    <Social />
                </div>
            </div>
        </Box>
    </footer>
);

export default Footer;
