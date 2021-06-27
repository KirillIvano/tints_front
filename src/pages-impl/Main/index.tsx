import React from 'react';

import {Box} from '@/uikit';
import {MainPageProps} from '@/pages';

import {CatalogBanner, TipsSection, Testimonials, Bestsellers, Banner} from './components';
import css from './styles.module.scss';
import {MainPageContext} from './contexts';


const MainPageBase = () => (
    <div className={css.mainPage}>
        <Banner />

        <Box>
            <Bestsellers className={css.bestsellers} />
        </Box>

        <CatalogBanner className={css.catalogBanner} />

        <Box>
            <TipsSection className={css.tips} />
            <Testimonials className={css.testimonials} />
        </Box>
    </div>
);

const MainPage = (props: MainPageProps) => {
    return (
        <MainPageContext.Provider value={props}>
            <MainPageBase />
        </MainPageContext.Provider>
    );
};

export default MainPage;
