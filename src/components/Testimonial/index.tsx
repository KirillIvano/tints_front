import React from 'react';

import {Reference, Typo} from '@/uikit';
import {Review} from '@/domain/testimonials/types';

import css from './styles.module.scss';


export type TestimonialProps = Review;

const Testimonial = ({
    date,
    description,
    title,
    url,
}: TestimonialProps) => (
    <div className={css.testimonial}>
        <Typo
            as="p"
            color="dark-gray"
        >
            {date}
        </Typo>

        <Typo
            as="h3"
            color="black"
            weight="bold"
            className={css.heading}
        >
            {title}
        </Typo>

        {description && (
            <Typo className={css.description} as="p">
                {description}
            </Typo>
        )}

        {url && (
            <Typo size="xs" as="p" className={css.link}>
                <Reference href={url}>
                        Читать отзыв на сайте
                </Reference>
            </Typo>
        )}
    </div>
);

export default React.memo(Testimonial);
