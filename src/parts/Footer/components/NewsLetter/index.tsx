import {useState} from 'react';
import {useForm} from 'react-hook-form';

import cn from 'classnames';
import {Typo, Input, Reference} from '@/uikit';

import styles from './styles.module.scss';



const NewsLetter = () => {
    const [email, setEmail] = useState('');

    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <Typo
                        color="white"
                        as="h3"
                        size="lg"
                        weight="normal"
                        className={cn(styles.newsletter_title)}
                    >
                        Подпишитесь на новостную рассылку
                    </Typo>
                </div>
            </div>
            <div className="row">
                <div className={cn(styles.subscribe, 'col-xs-12')}>
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
        </div>
    );
};

export default NewsLetter;
