import {Resource} from '@/util/service';
import {CategoryDto, ShadeDto} from './dto';

export const allProductsResource = new Resource<{categories: CategoryDto[]}>({
    shouldBatch: true,
    shouldCache: true,
});

export const allShadesResource = new Resource<{shades: ShadeDto[]}>({
    shouldBatch: true,
});

export const productResource = new Resource({
    shouldCache: true,
});
