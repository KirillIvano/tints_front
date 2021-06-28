import React from 'react';
import cn from 'classnames';

import {Box} from '@/uikit';

import {FeedbackForm, ContactsInfo} from './components';
import styles from './styles.module.scss';


const AdvicePage = () => (
    <Box className={styles.container}>
        <div className={cn(styles.main, 'row')}>
            <div className={cn('col-xs-12 col-md-4 col-lg-3', styles.feedback)}>
                <FeedbackForm />
            </div>
            <div className={cn('col-xs-12 col-md-7 col-lg-8 col-md-offset-1', styles.contacts)}>
                <ContactsInfo />
            </div>
        </div>
    </Box>
);

export default AdvicePage;
