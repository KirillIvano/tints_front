import React from 'react';
import classnames from 'classnames';

import {useUniqueId} from '@/hooks/useUniqueId';

import styles from './styles.module.scss';


type RadioInputProps = {
    wrapperClass?: string;
    labelClass?: string;
    labelContent: React.ReactNode | string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'>;

const RadioInput = (
    {
        wrapperClass,
        labelClass,
        className,
        labelContent,

        ...props
    }: RadioInputProps,
    ref: React.Ref<HTMLInputElement>,
) => {
    const labelId = useUniqueId();

    return (
        <label className={classnames(
            styles.radioWrapper,
            wrapperClass,
        )}>
            <input
                {...props}

                className={classnames(
                    styles.radioInput,
                    className,
                )}
                type="radio"

                aria-labelledby={labelId}
                ref={ref}
            />

            <div className={styles.radioBox}></div>

            <span
                id={labelId}
                className={classnames(
                    styles.radioLabel,
                    labelClass,
                )}
            >
                {labelContent}
            </span>
        </label>
    );
};


export default React.forwardRef(RadioInput);
