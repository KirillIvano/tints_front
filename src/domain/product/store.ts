import {injectable} from 'inversify';
import {computed, observable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';

import {CategoryPreview, ProductPreview, Sku} from './types';


@injectable()
export class ProductStore implements IProductStore {
    @observable
    private _skus = new Map<number, Sku>();
    @observable.ref
    private _productPreviews = new Map<number, ProductPreview>();
    @observable
    private _categories = new Map<number, CategoryPreview>();

    @computed
    get skus() {
        return [...this._skus.values()];
    }

    @computed
    get productPreviews() {
        return [...this._productPreviews.values()];
    }

    @computed
    get productCategories(): CategoryPreview[] {
        return [...this._categories.values()];
    }

    getSkuById = (id: number) =>
        this._skus.get(id);

    getProductPreviewById = (productId: number) =>
        this._productPreviews.get(productId);

    hydratePreviews(previews: ProductPreview[]) {
        previews.forEach(preview => this._productPreviews.set(preview.id, preview));
    }

    hydrateSku(product: Sku) {
        this._skus.set(product.id, product);
    }

    hydrateCategories(categories: CategoryPreview[]) {
        categories.forEach(category => this._categories.set(category.id, category));
    }
}

