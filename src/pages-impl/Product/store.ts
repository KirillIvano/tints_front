import {IProductStore} from '@/di/interfaces/IProductStore';
import {DINames} from '@/di/keys';
import {ProductPageProps} from '@/pages/product/[id]';
import {container} from '@/di/container';
import {IHydrationStore} from '@/di/interfaces/IHydrationStore';

import {IProductPageStore} from './context';


class ProductStoreBase implements IProductPageStore {
    constructor(
        private _hydrationStore: IHydrationStore<ProductPageProps>,
        private _productsStore: IProductStore,
        public productId: number,
    ) {}


    hydrate() {
        const {product} = this._hydrationStore.getData();

        this._productsStore.hydrateSku(product);
    }
}

const hydrationStore = container.get<IHydrationStore<ProductPageProps>>(DINames.HYDRATION_STORE);
const productStore = container.get<IProductStore>(DINames.PRODUCT_STORE);

export const ProductStore = ProductStoreBase.bind(null, hydrationStore, productStore);
