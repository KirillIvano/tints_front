import React from 'react';

import {Typo, Reference} from '@/uikit';

import css from './styles.module.scss';


const ContactsInfo = () => (
    <div>
        <Typo
            as="h2"
            color="black"
            size="xl"
            weight="normal"
        >
            Контакты
        </Typo>

        <div className={css.contact}>
            <img
                src="/icons/phone.jpg"
                className={css.contactIcon}
            />
            <Reference href='tel:+79993602525'>
                <Typo
                    as="span"
                    color="black"
                    size="xl"
                    className={css.contactText}
                >
                    +7 999 360 25 25
                </Typo>
            </Reference>
        </div>

        <div className={css.contact}>
            <img
                src="/icons/email.jpg"
                className={css.contactIcon}
            />
            <Reference href='mailto:info@tints.ru'>
                <Typo
                    as="span"
                    color="black"
                    size="xl"
                    className={css.contactText}
                >
                    info@tints.ru
                </Typo>
            </Reference>
        </div>

        <div className={css.contact}>
            <img
                src="/icons/map.jpg"
                className={css.contactIcon}
            />
            <Reference href='https://yandex.ru/maps/-/CCUeiSvtxC'>
                <Typo
                    as="span"
                    color="black"
                    size="xl"
                    className={css.contactText}
                >
                    110235 Москва, ул. Пушкина 18, оф. 200
                </Typo>
            </Reference>
        </div>
    </div>
);

export default ContactsInfo;
