import {injectable} from 'inversify';
import {computed, observable} from 'mobx';

import {IProductStore} from '@/di/interfaces/IProductStore';

import {Product, ProductPreview} from './types';


@injectable()
export class ProductStore implements IProductStore {
    @observable
    private _products = new Map<number, Product>();
    @observable.ref
    private _productPreviews: ProductPreview[] = [];

    @computed
    get products() {
        return this._products.values();
    }

    @computed
    get previews() {
        return [...this._productPreviews];
    }

    getProductById = (id: number) =>
        this._products.get(id);

    hydratePreviews(previews: ProductPreview[]) {
        this._productPreviews = [...previews];
    }

    hydrateProduct(product: Product) {
        this._products.set(product.id, product);
    }
}

