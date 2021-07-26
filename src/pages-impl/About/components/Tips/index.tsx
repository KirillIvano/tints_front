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
                href="/articles/our-story"
                image="/about-us/history.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наш бизнес"
                href="/articles/our-business"
                image="/about-us/business.jpg"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наш ассортимент"
                href="/articles/our-range"
                image="/about-us/assortment.png"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наша палитра"
                href="/articles/our-colours"
                image="/about-us/palette.jpg"
            />
        </div>
        <div className={cn('col-xs-12 col-md-4', styles.tip)}>
            <ArticlePreview
                caption="Наша этика"
                href="/articles/ethics"
                image="/about-us/ethics.png"
            />
        </div>
    </div>
);

export default Tips;
