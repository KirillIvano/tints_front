import React, {ComponentProps} from 'react';
import Slider from 'react-slick';

import Testimonial from '@/components/Testimonial';

import css from './styles.module.scss';

const TESTIMONIALS_SLIDER_SETTINGS = {
    centerPadding: '100px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const TEST_PROPS: ComponentProps<typeof Testimonial> = {
    date: Date.now(),
    heading: 'Не вредит волосам, закрашивает седину на 100% и очень-очень стойкая!',
    advantages: '100% закрашивает седину Без аммиака Блеск Богатая палитра цветов Здоровые волосы Красивый цвет',
    disadvantages: 'нет',
    link: 'asdasasd',
    description: 'Доброго времени суток!!!\nОкрашивание волос для меня – это не просто праздное развлечение',
};

const Testimonials = () => {
    return (
        <div className={css.carousel}>
            <Slider {...TESTIMONIALS_SLIDER_SETTINGS}>
                <Testimonial {...TEST_PROPS} />
                <Testimonial {...TEST_PROPS} />
                <Testimonial {...TEST_PROPS} />
                <Testimonial {...TEST_PROPS} />
                <Testimonial {...TEST_PROPS} />
            </Slider>
        </div>
    );
};

export default Testimonials;
