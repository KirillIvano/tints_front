import React from 'react';
import cn from 'classnames';

import {ArticlePreview} from '@/components';
import {StyledProps} from '@/util/types';

import styles from './styles.module.scss';


const Tips = ({className}: StyledProps) => (
    <div className={cn(className, 'row')}>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наша история"
                href="/TODO"
                image="/about-us/history.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наш бизнес"
                href="/TODO"
                image="/about-us/business.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наш ассортимент"
                href="/TODO"
                image="/about-us/assortment.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наша палитра"
                href="/TODO"
                image="/about-us/palette.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наша этика"
                href="/TODO"
                image="/about-us/ethics.png"
            />
        </div>
    </div>
);

export default Tips;
