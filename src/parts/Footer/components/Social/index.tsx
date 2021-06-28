import {useState} from 'react';
import {useForm} from 'react-hook-form';

import styles from './styles.module.scss';
import {Typo, Input, Reference} from '@/uikit';
import cn from 'classnames';



const NewsLetter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className={cn(styles.social, 'col-md-4 col-md-offset-2')}>
            <div className="row">
                <div className={cn(styles.social_item, 'col-md-2')}>
                    <img src="/icons/instagram.svg" alt="" />
                </div>
                <div className={cn(styles.social_item, 'col-md-2')}>
                    <img src="/icons/facebook.svg" alt="" />
                </div>
                <div className={cn(styles.social_item, 'col-md-2')}>
                    <img src="/icons/vk.svg" alt="" />
                </div>
                <div className={cn(styles.social_item, 'col-md-2')}>
                    <img src="/icons/twitter.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
