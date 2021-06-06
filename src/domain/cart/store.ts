import {observable, action, computed, makeObservable} from 'mobx';
import {injectable} from 'inversify';

import {createDebouncer} from '@/util/debounce';
import {ICartStore} from '@/di/interfaces/ICartStore';

import {CartItemType, CartType} from './types';
import {CartSnapshotScheme} from './scheme';

export const CART_STORE_KEY = 'cart';

@injectable()
export class CartStore implements ICartStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    private _cartItems = new Map<number, CartItemType>();
    private _saveDebouncer = createDebouncer(600);

    @computed
    get cartItems() {
        return [...this._cartItems.values()];
    }

    @computed
    get itemsCount() {
        return this._cartItems.size;
    }

    private saveCartState = () => {
        const cartToBeSaved = {cartItems: [...this._cartItems.values()]};
        const stringifiedCart = JSON.stringify(cartToBeSaved);

        this._saveDebouncer.perform(
            () => localStorage.setItem(CART_STORE_KEY, stringifiedCart),
        );
    }

    getItemCount = (productId: number) => {
        return this._cartItems.get(productId)?.productsCount;
    }

    getCartItemById = (productId: number) => {
        return this._cartItems.get(productId);
    }

    @action
    addProductToCart = (productId: number) => {
        this._cartItems.set(productId, {productId, productsCount: 1});
        this.saveCartState();
    }

    @action
    clearCart = () => {
        this._cartItems.clear();
        this.saveCartState();
    }

    @action
    removeCartItem = (productId: number) => {
        this._cartItems.delete(productId);
        this.saveCartState();
    }

    @action
    updateProductCount = (productId: number, currency: number) => {
        const product = this.getCartItemById(productId);
        if (!product) return;

        product.productsCount = currency;

        this.saveCartState();
    }

    @action
    initCart = () => {
        const cartFromMemory: string | null = localStorage.getItem(CART_STORE_KEY);
        if (!cartFromMemory) return;

        let cart;
        try {
            cart = JSON.parse(cartFromMemory) as CartType;
            CartSnapshotScheme.validate(cart);
        } catch {
            localStorage.removeItem(CART_STORE_KEY);
            return;
        }

        cart.cartItems.forEach(
            cartItem => this._cartItems.set(
                cartItem.productId,
                cartItem,
            ),
        );
    }
}
