import {Button, RadioInput, TextArea, TextInput, Typo} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';

// TODO: обработка формы
const Checkout = ({className}: StyledProps) => (
    <form className={className}>
        <TextInput
            labelText='Почта'
            placeholder='kek@lol.com'
            wrapperClass={css.field}
            required
        />

        <TextInput
            labelText='Телефон'
            placeholder='8 800 555-35-35'
            wrapperClass={css.field}
            required
        />

        <TextArea
            labelText='Текст сообщения'
            placeholder='Дополнительные детали'
            wrapperClass={css.field}
        />

        {/* TODO: delivery section */}

        <div className={css.field}>
            <Typo as="p" size="xs" className={css.paymentCaption}>Оплата</Typo>

            <RadioInput
                labelContent={'Онлайн'}
                checked
            />

            <RadioInput
                labelContent={'Наличными'}
            />
        </div>

        <Button
            width="full"
            className={css.submit}
        >
            Подтведить
        </Button>
    </form>
);

export default Checkout;
