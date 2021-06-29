import React, {
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    useMemo,
} from 'react';
import cn from 'classnames';

import {getUniqueId} from '@/util/getUniqueId';

import css from './styles.module.scss';
import Typo from '../Typography';

export type CommonProps = {
    labelText?: string;
    textArea?: string;
    labelClass?: string;
}

export type TextInputProps = CommonProps & {
    wrapperClass?: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = CommonProps & {
    wrapperClass?: string;
    error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextInput = React.forwardRef(({
    labelText,
    id,
    placeholder,

    labelClass,
    wrapperClass,
    className,

    required,
    error,

    ...props
}: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const inputId = useMemo(() => id ? id : getUniqueId(), [id]);

    return (
        <div className={cn(css.inputWrapper, wrapperClass)}>
            {labelText && (
                <label
                    className={cn(css.label, labelClass)}
                    htmlFor={inputId}
                >
                    {labelText} {required && (
                        <Typo as="span" size="xs" className={css.asteriks}>*</Typo>
                    )}
                </label>
            )}

            <input
                {...props}
                ref={ref}
                className={cn(css.input, className)}
                placeholder={placeholder}
                id={inputId}
            />

            {error && <Typo as="p" className={css.error}>{error}</Typo>}
        </div>
    );
});

TextInput.displayName = 'TextInput';


export const TextArea = React.forwardRef(({
    labelText,
    id,
    placeholder,

    labelClass,
    wrapperClass,
    className,

    required,
    error,

    ...props
}: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    const textAreaId = useMemo(() => id ? id : getUniqueId(), [id]);

    return (
        <div className={cn(css.inputWrapper, wrapperClass)}>
            <label
                className={cn(css.label, labelClass)}
                htmlFor={textAreaId}
            >
                {labelText} {required && (
                    <Typo as="span" size="xs" className={css.asteriks}>*</Typo>
                )}
            </label>

            <textarea
                {...props}
                ref={ref}
                className={cn(css.input, className)}
                placeholder={placeholder}
                id={textAreaId}
            />

            {error && <Typo as="p" className={css.error}>{error}</Typo>}
        </div>
    );
});

TextArea.displayName = 'TextArea';
