export type Banner = {
    title: string;
    text: string;

    buttonText: string;
    buttonUrl: string;

    backgroundLg: string
	backgroundSm: string
};

export type CategoryPreview = {
	id: number;
	name: string;
}

export type CatalogCategory = {
    id: number;
    name: string;
    products: number[];
}

export type Sku = {
	id: number;
	name: string;
	images: string[];

	productId: number;
	categoryId: number;
	shadeId: number;

	translit: string;
    vendorCode: string;

	oldPrice: number;
	price: number;

    new: boolean;
	top: boolean;

	description: string;
	info: ProductInfo[];
	related: ProductPreview[];
}

export type ProductPreview = {
	id: number;
	name: string;
	image: string;

	productId: number;
	categoryId: number;
	shadeId: number;

	translit: string;
    vendorCode: string;

	oldPrice: number;
	price: number;

    new: boolean;
	top: boolean;
}


export type ProductInfo = {
	title: string
	text: string
}

export type Product = {
	id: number;
	categoryId: number;
	name: string;
	translit: string;
	description: string;
	info: ProductInfo[];
	sku: Sku[];
	related: ProductPreview[];
}

export type Category = {
    id: number;
	name: string;
	translit: string;
	sku: Sku[];
}

export type Shade = {
    id: number;
	name: string;
    image: string;
}
