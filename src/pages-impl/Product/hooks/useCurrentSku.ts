import {useProductByIdSafe} from '@/domain/product/hooks';
import {Sku} from '@/domain/product/types';

import {useProductPageStore} from './useProductPageStore';

export const useCurrentSku = (): Sku => {
    const {productId} = useProductPageStore();
    const product = useProductByIdSafe(productId);

    return product;
};
