import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import {Reference} from '..';


export type ButtonSize = 'small' | 'normal';
export type ButtonWidth = 'full' | 'normal';

type ButtonProps = {
    size?: ButtonSize;
    width?: ButtonWidth;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    size,
    width='normal',

    className,
    ...props
}: ButtonProps) => (
    <button
        {...props}
        className={classnames(
            className,
            styles.button,
            styles[`size_${size}`],
            styles[`width_${width}`],
        )}
    />
);


type ButtonLinkProps = {
    size?: ButtonSize;
    width?: ButtonWidth;
} & React.ComponentProps<typeof Reference>;

export const ButtonLink = ({
    size,
    width,
    className,
    ...props
}: ButtonLinkProps) => (
    <Reference
        {...props}
        className={classnames(
            className,
            styles.button,
            styles[`size_${size}`],
            styles[`width_${width}`],
        )}
    />
);

