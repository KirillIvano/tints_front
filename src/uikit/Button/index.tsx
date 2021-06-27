import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


export type ButtonSize = 'small' | 'normal';
export type ButtonWidth = 'full' | 'normal';

type ButtonProps = {
    size?: ButtonSize;
    width?: ButtonWidth;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
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

export default Button;
