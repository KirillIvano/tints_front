import {useSyncEffect} from '@/hooks/useSyncEffect';
import {useProductStore} from '@/domain/product/hooks';

import {useCatalogStore} from './hooks/useCatalogStore';


const CatalogPage = () => {
    const catalogStore = useCatalogStore();
    const productsStore = useProductStore();

    useSyncEffect(() => {
        catalogStore.hydrate();
    }, [catalogStore]);

    return (
        <pre>
            {JSON.stringify(productsStore, undefined, 2)}
        </pre>
    );
};

export default CatalogPage;
