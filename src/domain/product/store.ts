import {injectable} from 'inversify';
import {computed, observable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';

import {CategoryPreview, ProductPreview, Sku} from './types';


@injectable()
export class ProductStore implements IProductStore {
    @observable
    private _skus = new Map<number, Sku>();
    @observable.ref
    private _productPreviews: ProductPreview[] = [];
    @observable
    private _categories = new Map<number, CategoryPreview>();

    @computed
    get skus() {
        return [...this._skus.values()];
    }

    @computed
    get productPreviews() {
        return [...this._productPreviews];
    }

    @computed
    get productCategories(): CategoryPreview[] {
        return [...this._categories.values()];
    }

    getSkuById = (id: number) =>
        this._skus.get(id);

    hydratePreviews(previews: ProductPreview[]) {
        this._productPreviews = [...previews];
    }

    hydrateSku(product: Sku) {
        this._skus.set(product.id, product);
    }

    hydrateCategories(categories: CategoryPreview[]) {
        categories.map(category => this._categories.set(category.id, category));
    }
}

