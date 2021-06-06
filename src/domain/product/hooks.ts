import {IProductStore} from '@/di/interfaces/IProductStore';
import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';
import {assertExists} from '@/util/assertions';

import {Product, ProductPreview} from './types';


export const useProductStore = (): IProductStore => useInject(DINames.PRODUCT_STORE);

export const useProductPreviews = (): ProductPreview[] => useProductStore().productPreviews;

export const useProductById = (productId: number): Product | undefined =>
    useProductStore().getProductById(productId);

export const useProductByIdSafe = (productId: number): Product => {
    const product = useProductById(productId);

    assertExists(product);

    return product;
};
