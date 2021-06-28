import {useState} from 'react';
import {useForm} from 'react-hook-form';

import styles from './styles.module.scss';
import {Typo, Input, Reference} from '@/uikit';
import cn from 'classnames';



const NewsLetter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className='col-md-6'>
            <div className="row">
                <Typo
                    color="white"
                    as="h3"
                    size="lg"
                    weight="normal"
                    className={cn(styles.newsletter_title)}
                >
                        Подпишитесь на новостную рассылку
                </Typo>
                <Input
                    className={cn(styles.input, styles.email, 'col-md-8')}
                />
                <Reference
                    className={styles.button}
                >
                        Подписаться
                </Reference>
            </div>
        </div>
    );
};

export default NewsLetter;
