import React, {ReactNode} from 'react';

import {Typo, Reference} from '@/uikit';

import styles from './styles.module.scss';


export type ArticlePreviewProps = {
    caption: ReactNode;
    image: string;
    href: string;
}

const ArticlePreview = ({
    caption,
    image,
    href,
}: ArticlePreviewProps) => (
    <a
        href={href}
        className={styles.preview__link}
    >
        <div
            className={styles.preview}
            style={{backgroundImage: `url(${image})`}}
        >
            <div className={styles.preview__overlay}>
                <Typo
                    as="span"
                    color="white"
                    size="xl"
                    weight="bold"
                >
                    {caption}
                </Typo>
            </div>

            <div aria-hidden="true" className={styles.preview__button} />
        </div>
    </a>
);

export default ArticlePreview;
