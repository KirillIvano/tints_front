import {StyledProps} from '@/util/types';
import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';


export type TypoFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type TypoColor = 'black' | 'dark-gray' | 'white';
export type TypoTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';

export type TypographyProps = StyledProps<{
    children: React.ReactNode;

    color?: TypoColor;
    size?: TypoFontSize;
    as?: TypoTag;
    weight?: 'bold' | 'normal' | number;
}>;

const Typo = ({
    children,

    color = 'dark-gray',
    size = 'xs',
    as = 'span',
    weight = 'normal',
    className,
}:  TypographyProps) => {
    const Comp = as ?? 'span';

    return (
        <Comp
            style={{fontWeight: weight}}
            className={cn(
                className,
                styles[`typo_${size}`],
                styles[`color_${color}`],
            )}
        >
            {children}
        </Comp>
    );
};

export default Typo;
