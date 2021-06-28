import {createContext} from 'react';

export type IProductPageStore = {
    productId: number;

    hydrate(): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductPageStoreContext = createContext<IProductPageStore>(null as any);
