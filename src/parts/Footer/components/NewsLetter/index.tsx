import cn from 'classnames';

import {Typo, TextInput, Button} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


const NewsLetter = ({className}: StyledProps) => (
    <div className={cn(className, css.newsletter)}>
        <div className="row">
            <div className="col-xs-12">
                <Typo
                    color="white"
                    as="h3"
                    size="lg"
                    weight="normal"
                    className={css.title}
                >
                    Подпишитесь на новостную рассылку
                </Typo>
            </div>
        </div>

        <div className="row">
            <div className={cn(css.subscribe, 'col-xs-12')}>
                <TextInput
                    className={css.input}
                    wrapperClass={cn(css.wrapper, 'col-md-8')}
                    placeholder='example@mail.ru'
                />
                <Button className={css.button}>
                    Подписаться
                </Button>
            </div>
        </div>
    </div>
);

export default NewsLetter;
