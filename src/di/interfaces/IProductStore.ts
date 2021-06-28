import {CategoryPreview, ProductPreview, Sku} from '@/domain/product/types';


export type IProductStore = {
    getSkuById(id: number): Sku | undefined;
    getProductPreviewById(productId: number): ProductPreview | undefined;
    hydrateSku(product: Sku): void;
    hydratePreviews(previews: ProductPreview[]): void;
    hydrateCategories(categories: CategoryPreview[]): void;

    productCategories: CategoryPreview[];
    productPreviews: ProductPreview[];
}
