import {ProductPreview} from '@/domain/product/types';

export type ProductPreviewDto = ProductPreview;

export type CategoryDto = {
    id: number;
	name: string;
	translit: string;
	sku: ProductPreviewDto[];
}

export type ShadeDto = {
    id: number;
    image: string;
}
