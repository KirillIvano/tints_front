import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    sizing: 'sm' | 'lg';
}

export const Select = ({
    className,
    sizing,
    ...props
}: SelectProps) => (
    <select
        {...props}
        className={classnames(
            className,
            styles.input,
            styles.select,
            {[styles.large]: sizing === 'lg'},
        )}
    />
);
