import {useState} from 'react';
import {useForm} from 'react-hook-form';

import cn from 'classnames';
import {Typo, TextInput, Button} from '@/uikit';

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
                    <TextInput
                        className={styles.input}
                        wrapperClass={cn(styles.wrapper, 'col-md-8')}
                        placeholder='example@mail.ru'
                        square
                    />
                    <Button
                        className={styles.button}
                        square
                    >
                        Подписаться
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
