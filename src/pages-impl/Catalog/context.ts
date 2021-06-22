import {ProductPreview, Shade} from '@/domain/product/types';
import {createContext} from 'react';


export type CatalogQuery = {
    categoryId?: string;
    shadeId?: string;
    search?: string;
}

export type ICatalogStore = {
    currentCategory: number | undefined;
    currentShade: number | undefined;
    currentSearch: string;
    assortment: ProductPreview[];
    shades: Shade[];

    resetFilters(): void;
    setSearchString(str: string): void;
    setCategoryId(id: number | undefined): void;
    setShade(shadeId: number | undefined): void;
    hydrate(): void;
    syncParams(query: CatalogQuery): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CatalogStoreContext = createContext<ICatalogStore>(null as any);
