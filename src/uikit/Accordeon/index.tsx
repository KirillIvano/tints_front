import {StyledProps} from '@/util/types';
import React, {useState} from 'react';
import cn from 'classnames';
import Typo from '../Typography';

import css from './styles.module.scss';


export type AccordeonProps = StyledProps<{
    title: string;
    text: string;
    initial?: boolean;
}>;

const Accordeon = ({
    title,
    text,
    initial = false,
    className,
}: AccordeonProps) => {
    const [isSelected, setSelected] = useState(initial);

    const toggle = () => setSelected(val => !val);

    return (
        <div className={cn(className, {[css.selected]: isSelected})}>
            <div className={css.toggler} onClick={toggle}>
                <Typo as="h2" size="sm" color="black">{title}</Typo>
            </div>
            <div className={css.content}>
                <Typo as="pre" size="xs">{text}</Typo>
            </div>
        </div>
    );
};

export default Accordeon;
