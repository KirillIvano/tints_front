import React, {SyntheticEvent} from 'react';
import {useRouter} from 'next/router';

import {StyledProps} from '@/util/types';


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
            className={className}
        >
            {children}
        </a>
    );
};

export default Reference;
