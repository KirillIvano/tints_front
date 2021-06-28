import React, {useMemo} from 'react';

import {useSyncEffect} from '@/hooks/useSyncEffect';
import {ProductPageProps} from '@/pages/product/[id]';
import {Box} from '@/uikit';

import {
    ProductImages,
    ProductInfo,
    Breadcrumbs,
    ProductDescription,
    ProductRelated,
} from './components';
import {ProductPageStoreContext} from './context';
import {ProductStore} from './store';
import css from './styles.module.scss';


const ProductPageBase = () => {
    return (
        <Box className={css.productPage}>
            <Breadcrumbs />

            <div className="row">
                <div className="col-md-6">
                    <ProductImages />
                </div>
                <div className="col-md-5 col-md-offset-1">
                    <ProductInfo />
                </div>
            </div>

            <ProductDescription className={css.description} />

            <ProductRelated className={css.related} />
        </Box>
    );
};

const ProductPage = ({productId}: ProductPageProps) => {
    const productPageStore = useMemo(() => new ProductStore(productId), [productId]);

    useSyncEffect(() => {
        productPageStore.hydrate();
    }, [productId, productPageStore]);

    return (
        <ProductPageStoreContext.Provider value={productPageStore}>
            <ProductPageBase />
        </ProductPageStoreContext.Provider>
    );
};

export default ProductPage;
