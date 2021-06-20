import {format} from 'date-fns';

export const formatTestimonialDate = (date: number) =>
    format(date, 'dd.MM.yyyy');
