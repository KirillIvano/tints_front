import React from 'react';
import cn from 'classnames';

import {Box, Typo, TextInput, Reference} from '@/uikit';

import Button from '@/uikit/Button';

import styles from './styles.module.scss';
import {TextArea} from '@/uikit/TextInput';

const AdvicePage = () => (
    <Box className={styles.container}>
        <div className={cn(styles.main, 'row')}>
            <div className={cn('col-xs-12 col-md-4 col-lg-3', styles.feedback)}>
                <Typo
                    as="h2"
                    color="black"
                    size="xl"
                    weight="normal"
                >
                Обратная связь
                </Typo>

                <TextInput
                    labelText='Контакт'
                    placeholder='Телефон или почта'
                    className={styles.input}
                />

                <TextArea
                    labelText='Текст сообщения'
                    placeholder='Чем мы можем помочь'
                    className={styles.input}
                />

                <Button>Отправить</Button>
            </div>
            <div className={cn('col-xs-12 col-md-7 col-lg-8 col-md-offset-1', styles.contacts)}>
                <Typo
                    as="h2"
                    color="black"
                    size="xl"
                    weight="normal"
                >
                Контакты
                </Typo>

                <div className={styles.contact}>
                    <img
                        src="/icons/phone.jpg"
                        className={styles.icon}
                    />
                    <Reference href='tel:+79993602525'>
                        <Typo
                            as="span"
                            color="black"
                            size="xxl"
                            className={styles.contact__text}
                        >
                        +7 999 360 25 25
                        </Typo>
                    </Reference>
                </div>

                <div className={styles.contact}>
                    <img
                        src="/icons/email.jpg"
                        className={styles.icon}
                    />
                    <Reference href='mailto:info@tints.ru'>
                        <Typo
                            as="span"
                            color="black"
                            size="xxl"
                            className={styles.contact__text}
                        >
                        info@tints.ru
                        </Typo>
                    </Reference>
                </div>

                <div className={styles.contact}>
                    <img
                        src="/icons/map.jpg"
                        className={styles.icon}
                    />
                    <Reference href='https://yandex.ru/maps/-/CCUeiSvtxC'>
                        <Typo
                            as="span"
                            color="black"
                            size="xxl"
                            className={styles.contact__text}
                        >
                            110235 Москва, ул. Пушкина 18, оф. 200
                        </Typo>
                    </Reference>
                </div>

            </div>
        </div>
    </Box>
);

export default AdvicePage;
