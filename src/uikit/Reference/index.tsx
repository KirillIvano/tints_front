import React, {SyntheticEvent} from 'react';
import {useRouter} from 'next/router';
import cn from 'classnames';

import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


export type ReferenceProps = StyledProps<{
    href: string;
    children: React.ReactNode;
}>;

const Reference = ({href, children, className}: ReferenceProps) => {
    const router = useRouter();

    const onAction = (e: SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        router.push(href);
    };

    return (
        <a
            href={href}
            onClick={onAction}
            onKeyDown={e => e.key === ' ' && onAction(e)}
            className={cn(css.reference, className)}
        >
            {children}
        </a>
    );
};

export default Reference;
