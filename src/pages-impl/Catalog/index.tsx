import React from 'react';

import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';

import {useCatalogStore} from './hooks/useCatalogStore';
import {useSyncEffect} from '@/hooks/useSyncEffect';


const CatalogPage = () => {
    const catalogStore = useCatalogStore();
    const productsStore = useInject(DINames.PRODUCT_STORE);

    useSyncEffect(() => {
        catalogStore.hydrate();
    }, [catalogStore]);

    return (<pre>
        {JSON.stringify(productsStore, undefined, 2)}
    </pre>);
};

export default CatalogPage;
