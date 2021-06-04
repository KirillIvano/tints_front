import {observable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';
import {DINames} from '@/di/keys';
import {CatalogProps} from '@/pages/catalog';
import {container} from '@/di/container';
import {IHydrationStore} from '@/di/interfaces/IHydrationStore';


class CatalogStore {
    @observable
    data: CatalogProps;

    constructor(
        private _productStore: IProductStore,
        private _hydrationStore: IHydrationStore<CatalogProps>,
    ) {
        // this.hydrate();
    }

    hydrate() {
        const {previews} = this._hydrationStore.getData();

        this._productStore.hydratePreviews(previews);
    }
}

const productStore = container.get<IProductStore>(DINames.PRODUCT_STORE);
const hydrationStore = container.get<IHydrationStore<CatalogProps>>(DINames.HYDRATION_STORE);

export const catalogStore = new CatalogStore(productStore, hydrationStore);
