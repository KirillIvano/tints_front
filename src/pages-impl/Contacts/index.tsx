import React from 'react';

import {Box, Typo, Input, Reference} from '@/uikit';

import styles from './styles.module.scss';
import Button from '@/uikit/Button';

const AdvicePage = () => (
    <Box className={styles.main}>
        <div className={styles.feedback}>
            <Typo
                as="h2"
                color="black"
                size="xl"
                weight="normal"
            >
                Обратная связь
            </Typo>

            <Typo
                as="p"
                color="black"
                size="xs"
                weight="normal"
            >
                Контакт
            </Typo>
            <Input
                sizing='lg'
                className={styles.input}
                placeholder='Телефон или почта'
            />

            <Typo
                as="p"
                color="black"
                size="xs"
                weight="normal"
            >
                Текст сообщения
            </Typo>
            <Input
                sizing='lg'
                className={styles.input}
                placeholder='Чем мы можем помочь'
                multiline
            />

            <Button>Отправить</Button>
        </div>
        <div className={styles.contacts}>
            <Typo
                as="h2"
                color="black"
                size="xl"
                weight="normal"
            >
                Контакты
            </Typo>

            <div className={styles.contact}>
                <Typo
                    as="span"
                    size="xl"
                    className={styles.icon}
                >
                    📞
                </Typo>
                <Reference href='tel:+79993602525'>
                    <Typo
                        as="span"
                        color="black"
                        size="xl"
                    >
                        +79993602525
                    </Typo>
                </Reference>
            </div>

            <div className={styles.contact}>
                <Typo
                    as="span"
                    size="xl"
                    className={styles.icon}
                >
                    📧
                </Typo>
                <Reference href='mailto:info@tints.ru'>
                    <Typo
                        as="span"
                        color="black"
                        size="xl"
                    >
                        info@tints.ru
                    </Typo>
                </Reference>
            </div>

            <div className={styles.contact}>
                <Typo
                    as="span"
                    size="xl"
                    className={styles.icon}
                >
                    🗺
                </Typo>
                <Reference href='mailto:info@tints.ru'>
                    <Typo
                        as="span"
                        color="black"
                        size="xl"
                    >
                        110235 Москва, ул. Пушкина 18, оф. 200
                    </Typo>
                </Reference>
            </div>


        </div>
    </Box>
);

export default AdvicePage;
