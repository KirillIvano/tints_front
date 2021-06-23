import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


export type ButtonSize = 'small' | 'normal';

type ButtonProps = {
    size?: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    size,

    className,
    ...props
}: ButtonProps) => (
    <button
        {...props}
        className={classnames(
            className,
            styles.button,
            styles[`size_${size}`],
        )}
    />
);

export default Button;
