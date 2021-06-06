import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type BoxProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>

const Box = (
    {
        className,
        children,
        ...props
    }: BoxProps,
) => (
    <div
        className={classnames(styles.grid, className)}
        {...props}
    >
        {children}
    </div>
);


export default Box;
