import React from 'react';
import cn from 'classnames';

import {ArticlePreview} from '@/components';
import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';


const Tips = ({className}: StyledProps) => (
    <div className={cn(className, 'row')}>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Советы по перманентным краскам"
                href="/articles/permament-tips"
                image="/faqs/permanentPaints.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Как использовать Henna Cream"
                href="/articles/henna-cream"
                image="/faqs/hennaCream.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Окрашивание светлых волос"
                href="/articles/lightener-tips"
                image="/faqs/lightHair.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption={<span>Тестируем кожу&nbsp;и&nbsp;волосы</span>}
                href="/articles/hair-skin-tests"
                image="/faqs/hairTest.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Уход за волосами"
                href="/articles/hair-care-tips"
                image="/faqs/hairCare.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Правильное высветление"
                href="/articles/lightener-tips"
                image="/faqs/highlighting.png"
            />
        </div>
    </div>
);

export default Tips;
