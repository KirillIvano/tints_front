import React, {
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    Ref,
    useMemo,
} from 'react';
import cn from 'classnames';

import {getUniqueId} from '@/util/getUniqueId';

import css from './styles.module.scss';

export type CommonProps = {
    labelText?: string;
    textArea?: string;
    labelClass?: string;
}

export type TextInputProps = CommonProps & {
    $ref?: Ref<HTMLInputElement>;
    wrapperClass?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = CommonProps & {
    $ref?: Ref<HTMLTextAreaElement>;
    wrapperClass?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextInput = ({
    labelText,
    id,
    placeholder,
    $ref,

    labelClass,
    wrapperClass,
    className,

    ...props
}: TextInputProps) => {
    const inputId = useMemo(() => id ? id : getUniqueId(), [id]);

    return (
        <div className={cn(css.inputWrapper, wrapperClass)}>
            <label
                className={cn(css.label, labelClass)}
                htmlFor={inputId}
            >
                {labelText}
            </label>

            <input
                {...props}
                ref={$ref}
                className={cn(css.input, className)}
                placeholder={placeholder}
                id={inputId}
            />
        </div>
    );
};

export const TextArea = ({
    labelText,
    id,
    placeholder,
    $ref,

    labelClass,
    wrapperClass,
    className,

    ...props
}: TextAreaProps) => {
    const textAreaId = useMemo(() => id ? id : getUniqueId(), [id]);

    return (
        <div className={cn(css.inputWrapper, wrapperClass)}>
            <label
                className={cn(css.label, labelClass)}
                htmlFor={textAreaId}
            >
                {labelText}
            </label>

            <textarea
                {...props}
                ref={$ref}
                className={cn(css.input, className)}
                placeholder={placeholder}
                id={textAreaId}
            />
        </div>
    );
};
