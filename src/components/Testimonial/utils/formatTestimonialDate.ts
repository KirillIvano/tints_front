import {format} from 'date-fns';

export const formatTestimonialDate = (date: Date) =>
    format(date, 'dd.mm.yyyy');
