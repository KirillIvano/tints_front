import React from 'react';

import {Reference, Typo} from '@/uikit';

import {formatTestimonialDate} from './utils/formatTestimonialDate';


export type TestimonialProps = {
    date: Date,
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
        <div>
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
            >
                {heading}
            </Typo>

            {advantages && (
                <Typo as="p">{advantages}</Typo>
            )}
            {disadvantages && (
                <Typo as="p">{disadvantages}</Typo>
            )}
            {description && (
                <Typo as="p">{description}</Typo>
            )}

            {link && <Reference href={link}>Читать отзыв на сайте</Reference>}
        </div>
    );
};

export default React.memo(Testimonial);
