import {injectable} from 'inversify';
import {computed, observable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';

import {CategoryPreview, Product, ProductPreview} from './types';


@injectable()
export class ProductStore implements IProductStore {
    @observable
    private _products = new Map<number, Product>();
    @observable.ref
    private _productPreviews: ProductPreview[] = [];
    @observable
    private _categories = new Map<number, CategoryPreview>();

    @computed
    get products() {
        return this._products.values();
    }

    @computed
    get productPreviews() {
        return [...this._productPreviews];
    }

    @computed
    get productCategories(): CategoryPreview[] {
        return [...this._categories.values()];
    }

    getProductById = (id: number) =>
        this._products.get(id);

    hydratePreviews(previews: ProductPreview[]) {
        this._productPreviews = [...previews];
    }

    hydrateProduct(product: Product) {
        this._products.set(product.id, product);
    }

    hydrateCategories(categories: CategoryPreview[]) {
        categories.map(category => this._categories.set(category.id, category));
    }
}

