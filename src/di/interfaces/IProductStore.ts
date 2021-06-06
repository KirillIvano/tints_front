import {Product, ProductPreview} from '@/domain/product/types';


export type IProductStore = {
    getProductById(id: number): Product | undefined;
    hydrateProduct(product: Product): void;
    hydratePreviews(previews: ProductPreview[]): void;

    productPreviews: ProductPreview[];
}
