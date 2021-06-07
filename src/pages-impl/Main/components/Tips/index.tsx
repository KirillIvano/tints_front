import React from 'react';
import cn from 'classnames';

import {ArticlePreview} from '@/components';
import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';
import {Reference, Typo} from '@/uikit';


const TipsSection = ({className}: StyledProps) => (
    <>
        <div className={cn(className, 'row')}>
            <div className={cn('col-xs-12 col-md-4', styles.tip)}>
                <ArticlePreview
                    caption="Советы по перманентным краскам"
                    href="/TODO"
                    image="/main/permanentPaints.png"
                />
            </div>
            <div className={cn('col-xs-12 col-md-4', styles.tip)}>
                <ArticlePreview
                    caption="Советы по использованию Henna Cream"
                    href="/TODO"
                    image="/main/hennaCream.png"
                />
            </div>
            <div className={cn('col-xs-12 col-md-4', styles.tip)}>
                <ArticlePreview
                    caption="Советы по окрашиванию светлых волос"
                    href="/TODO"
                    image="/main/lightHair.png"
                />
            </div>
        </div>

        <div className={styles.allTipsContainer}>
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
        </div>
    </>
);

export default TipsSection;
