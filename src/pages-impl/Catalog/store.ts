import {observable, action, computed, makeObservable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';
import {DINames} from '@/di/keys';
import {CatalogProps} from '@/pages/catalog';
import {container} from '@/di/container';
import {IHydrationStore} from '@/di/interfaces/IHydrationStore';
import {ProductPreview, Shade} from '@/domain/product/types';

import {CatalogQuery, ICatalogStore} from './context';

class CatalogStoreBase implements ICatalogStore {
    @observable.ref
    currentSearch = '';
    @observable.ref
    currentShade: number | undefined;
    @observable.ref
    currentCategory: number | undefined;

    @observable.ref
    _shades: Shade[] = []

    constructor(
        private _productStore: IProductStore,
        private _hydrationStore: IHydrationStore<CatalogProps>,
    ) {
        makeObservable(this);
    }

    @computed
    get shades(): Shade[] {
        return this._shades;
    }

    @computed
    get assortment(): ProductPreview[] {
        const srcProducts = this._productStore.productPreviews;

        const res = srcProducts
            .filter(
                ({name, shadeId, categoryId}) =>
                    name.toLowerCase().includes(this.currentSearch.toLowerCase())
                        && (!this.currentShade || this.currentShade === shadeId)
                        && (!this.currentCategory || this.currentCategory === categoryId),
            );

        return res;
    }

    @action
    setSearchString(str: string) {
        this.currentSearch = str;
    }

    @action
    setCategoryId(id: number) {
        this.currentCategory = id;
    }

    @action
    setShade(shadeId?: number) {
        this.currentShade = shadeId;
    }

    @action
    resetFilters() {
        this.currentShade = undefined;
        this.currentCategory = undefined;
        this.currentSearch = '';
    }

    hydrate() {
        const {previews, shades, categories} = this._hydrationStore.getData();

        this._productStore.hydratePreviews(previews);
        this._productStore.hydrateCategories(categories);
        this._shades = shades;
    }

    syncParams({search, shadeId, categoryId}: CatalogQuery) {
        search && (this.currentSearch = search);
        categoryId && (this.currentCategory = +categoryId);
        shadeId && (this.currentShade = +shadeId);
    }
}

const productStore = container.get<IProductStore>(DINames.PRODUCT_STORE);
const hydrationStore = container.get<IHydrationStore<CatalogProps>>(DINames.HYDRATION_STORE);

export const CatalogStore = CatalogStoreBase.bind(null, productStore, hydrationStore);
