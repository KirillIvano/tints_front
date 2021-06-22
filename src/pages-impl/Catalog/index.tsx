import React, {useEffect, useMemo, useRef} from 'react';
import {observer} from 'mobx-react-lite';
import {filter} from 'ramda';
import {parse, stringify} from 'qs';
import {useRouter} from 'next/router';
import cn from 'classnames';

import {useSyncEffect} from '@/hooks/useSyncEffect';
import {Box} from '@/uikit';

import {CatalogProducts, CategorySelect, SearchInput, ShadeSelect} from './components';
import {CatalogStoreContext} from './context';
import {CatalogStore} from './store';
import css from './styles.module.scss';
import {useCatalogStore} from './hooks/useCatalogStore';


const CatalogPageBase = () => (
    <Box className={css.catalog}>
        <div className="row">
            <div className={cn(css.filters, 'col-md-3 col-xs-12')}>
                <SearchInput />
                <ShadeSelect className={css.shadeSelect} />
                <CategorySelect className={css.categorySelect} />
            </div>

            <div className="col-md-9 col-xs-12">
                <CatalogProducts />
            </div>
        </div>
    </Box>
);

const CatalogQuerySpy = observer(() => {
    const isFirstRender = useRef(true);

    const store = useCatalogStore();
    const router = useRouter();

    useEffect(() => {
        store.syncParams(parse(window.location.search.slice(1)));
    }, [store]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const params = filter(Boolean)({
            categoryId: store.currentCategory,
            shadeId: store.currentShade,
            search: store.currentSearch,
        });

        window.history.pushState('', '', `?${stringify(params)}`);
    }, [store.currentCategory, store.currentSearch, store.currentShade, router]);

    return null;
});

const CatalogPage = () => {
    const catalogStore = useMemo(() => new CatalogStore(), []);

    useSyncEffect(() => {
        catalogStore.hydrate();
    }, [catalogStore]);

    return (
        <CatalogStoreContext.Provider value={catalogStore}>
            <CatalogQuerySpy />
            <CatalogPageBase />
        </CatalogStoreContext.Provider>
    );
};

export default CatalogPage;
