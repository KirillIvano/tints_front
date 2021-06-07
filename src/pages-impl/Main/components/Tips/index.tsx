import React from 'react';
import cn from 'classnames';

import {ArticlePreview} from '@/components';
import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';
import {Reference, Typo} from '@/uikit';


const TipsSection = ({className, Tips, showAll = false}: StyledProps) => (
    <>
        <div className={cn(className, 'row')}>
            {Tips && Tips.map(({caption, href, image}, index) => {
                return (
                    <div className={cn('col-xs-12 col-md-4', styles.tip)}>
                        <ArticlePreview
                            caption={caption}
                            href={href}
                            image={image}
                            key={index}
                        />
                    </div>
                )})}
        </div>
        {showAll && <div className={styles.allTipsContainer}>
            <Reference href="/TODO">
                <Typo
                    as="span"
                    color="dark-gray"
                    size="xs"
                    className={styles.allTips}
                >
                    Смотреть все
                </Typo>
            </Reference>
        </div>}
    </>
);

export default TipsSection;
