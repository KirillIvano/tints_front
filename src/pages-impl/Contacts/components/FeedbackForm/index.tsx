import {useMemo} from 'react';
import {RegisterOptions, useForm} from 'react-hook-form';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import {Typo, TextInput, TextArea, Button} from '@/uikit';
import {FeedbackParams} from '@/services/feedback/dto';

import css from './styles.module.scss';
import {FeedbackStore} from './store';



const VALIDATION: Record<keyof FeedbackParams, RegisterOptions> = {
    contact: {required: 'Введите контакт'},
    text: {required: 'Введите описание'},
};


const FeedbackForm = observer(() => {
    const feedbackStore = useMemo(() => new FeedbackStore(), []);
    const {feedbackStatus} = feedbackStore;

    const {handleSubmit, register, formState: {errors}} = useForm<FeedbackParams>();

    return (
        <form onSubmit={handleSubmit(vals => feedbackStore.sendFeedback(vals))}>
            <Typo
                as="h2"
                color="black"
                size="xl"
                weight="normal"
            >
                Обратная связь
            </Typo>

            <TextInput
                {...register('contact', VALIDATION.contact)}
                disabled={feedbackStatus === 'pending'}
                labelText='Контакт'
                placeholder='Телефон или почта'
                wrapperClass={css.input}
                error={errors.contact?.message}
                required
            />

            <TextArea
                {...register('text', VALIDATION.text)}
                disabled={feedbackStatus === 'pending'}
                labelText='Текст сообщения'
                placeholder='Чем мы можем помочь'
                wrapperClass={css.input}
                error={errors.text?.message}
                required
            />

            <Button
                width="full"
                disabled={feedbackStatus === 'pending'}
            >
                Отправить
            </Button>

            {feedbackStatus === 'success' && (
                <Typo as="p" className={cn(css.feedbackStatus, css.success)}>
                    Успешно отправлено
                </Typo>
            )}
            {feedbackStatus === 'error' && (
                <Typo as="p" className={cn(css.feedbackStatus, css.error)}>
                    Не удалось отправить
                </Typo>
            )}
        </form>
    );
});

export default FeedbackForm;
