import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type InputBaseProps = {
    className: string;
    id: string;
    name: string;

    placeholder?: string;
    type?: string;
    value?: string;
    tabIndex?: number;
    sizing?: 'sm' | 'lg';
    disabled?: boolean;
}

type InputHandlers<TInputType extends HTMLElement> = {
    onChange?: (e: React.ChangeEvent<TInputType>) => void;
    onClick?: (e: React.MouseEvent<TInputType>) => void;
    onKeyUp?: (e: React.KeyboardEvent<TInputType>) => void;
    onKeyDown?: (e: React.KeyboardEvent<TInputType>) => void;
    onFocus?: (e: React.FocusEvent<TInputType>) => void;
    onBlur?: (e: React.FocusEvent<TInputType>) => void;
}

type TextAreaProps =  {
    multiline: true;
} & InputBaseProps & InputHandlers<HTMLTextAreaElement>;

type InputProps = {
    multiline?: false;
}  & InputBaseProps & InputHandlers<HTMLInputElement>;


export const Input = React.forwardRef<unknown, TextAreaProps | InputProps>(({
    className,
    sizing='sm',
    multiline,

    ...props
}: InputProps | TextAreaProps, ref) => {
    const commonProps = {
        className: classnames(
            className,
            styles.input,
            {[styles.large]: sizing === 'lg'},
        ),
    };

    if (multiline) {
        return (
            <textarea
                {...props as TextAreaProps}
                {...commonProps}
                ref={ref}
            />
        );
    }

    return <input {...props as InputProps} {...commonProps} type="text" />;
});
Input.displayName = 'Input';

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
