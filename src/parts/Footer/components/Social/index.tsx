import {useState} from 'react';

import {Reference} from '@/uikit';

import styles from './styles.module.scss';


const NewsLetter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className='row'>
            <div className='col-xs-3'>
                <Reference href='https://www.instagram.com' className={styles.social_item}>
                    <img src="/icons/instagram.svg" alt="" />
                </Reference>
            </div>
            <div className='col-xs-3'>
                <Reference href='https://www.facebook.com' className={styles.social_item}>
                    <img src="/icons/facebook.svg" alt="" />
                </Reference>
            </div>
            <div className='col-xs-3'>
                <Reference href='https://www.vk.com' className={styles.social_item}>
                    <img src="/icons/vk.svg" alt="" />
                </Reference>
            </div>
            <div className='col-xs-3'>
                <Reference href='https://www.twitter.com' className={styles.social_item}>
                    <img src="/icons/twitter.svg" alt="" />
                </Reference>
            </div>
        </div>
    );
};

export default NewsLetter;
