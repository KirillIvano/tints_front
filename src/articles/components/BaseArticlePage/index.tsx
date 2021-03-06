import React from 'react';

import styles from './styles.module.scss';


type ArticleProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>

const Article = (
    {
        children,
        ...props
    }: ArticleProps,
) => (
    <div
        className={styles.container}
        {...props}
    >
        {children}
    </div>
);


export default Article;
