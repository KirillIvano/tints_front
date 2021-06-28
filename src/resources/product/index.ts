import {Product} from '@/domain/product/types';
import {Resource} from '@/util/service';

import {CategoryDto, ProductPreviewDto, ShadeDto} from './dto';

export const allProductsResource = new Resource<{categories: CategoryDto[]}>({
    shouldBatch: true,
    shouldCache: true,
});

export const allShadesResource = new Resource<{shades: ShadeDto[]}>({
    shouldBatch: true,
    shouldCache: true,
});

export const productResource = new Resource<{product: Product}>({
    shouldBatch: true,
    shouldCache: true,
});

export const bestsellerResource = new Resource<{products: ProductPreviewDto[]}>({
    shouldBatch: true,
    shouldCache: true,
});
