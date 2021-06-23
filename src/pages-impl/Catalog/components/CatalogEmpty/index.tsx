import React from 'react';

import {Button, Typo} from '@/uikit';

import css from './styles.module.scss';
import {useCatalogStore} from '../../hooks/useCatalogStore';


const CatalogEmpty = () => {
    const store = useCatalogStore();

    const handleReset = () => store.resetFilters();

    return (
        <div className={css.catalogEmpty}>
            <Typo size="lg" color="black" className={css.catalogText}>
                По вашему запросу ничего не найдено, попробуйте поменять фильтры
            </Typo>

            <div className={css.buttonContainer}>
                <Button onClick={handleReset}>Сбросить фильтры</Button>
            </div>
        </div>
    );
};
export default CatalogEmpty;
