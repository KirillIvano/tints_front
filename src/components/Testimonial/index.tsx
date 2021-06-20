import React from 'react';

import {Reference, Typo} from '@/uikit';

import {formatTestimonialDate} from './utils/formatTestimonialDate';
import css from './styles.module.scss';


export type TestimonialProps = {
    date: number,
    heading: string;
    advantages: string;
    disadvantages: string;
    description: string;
    link: string;
}

const Testimonial = ({
    date,
    heading,
    advantages,
    disadvantages,
    description,
    link,
}: TestimonialProps) => {
    const formattedDate = formatTestimonialDate(date);

    return (
        <div className={css.testimonial}>
            <Typo
                as="p"
                color="dark-gray"
            >
                {formattedDate}
            </Typo>

            <Typo
                as="h3"
                color="black"
                weight="bold"
                className={css.heading}
            >
                {heading}
            </Typo>

            {advantages && (
                <Typo size="xs" as="p">
                    <Typo className={css.attitudeSign} as="span">+</Typo>{advantages}
                </Typo>
            )}
            {disadvantages && (
                <Typo size="xs" as="p">
                    <Typo className={css.attitudeSign} as="span">-</Typo>{disadvantages}
                </Typo>
            )}
            {description && (
                <Typo className={css.description} as="p">
                    {description}
                </Typo>
            )}

            {link && (
                <Typo size="xs" as="p" className={css.link}>
                    <Reference href={link}>
                        Читать отзыв на сайте
                    </Reference>
                </Typo>
            )}
        </div>
    );
};

export default React.memo(Testimonial);
