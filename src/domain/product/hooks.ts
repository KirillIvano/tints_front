import {IProductStore} from '@/di/interfaces/IProductStore';
import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';
import {assertExists} from '@/util/assertions';

import {ProductPreview, Sku} from './types';


export const useProductStore = (): IProductStore => useInject(DINames.PRODUCT_STORE);

export const useProductPreviews = (): ProductPreview[] => useProductStore().productPreviews;

export const useProductPreview = (productId: number): ProductPreview | undefined =>
    useProductStore().getProductPreviewById(productId);
// TODO: create helper for creating safe hooks
export const useProductPreviewSafe = (productId: number): ProductPreview => {
    const product = useProductPreview(productId);

    assertExists(product);

    return product;
};

export const useSkuById = (productId: number): Sku | undefined =>
    useProductStore().getSkuById(productId);

export const useProductByIdSafe = (productId: number): Sku => {
    const product = useSkuById(productId);

    assertExists(product);

    return product;
};
