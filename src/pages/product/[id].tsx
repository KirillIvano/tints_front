import {GetStaticPaths, GetStaticProps} from 'next';

import {Sku} from '@/domain/product/types';
import {ProductPreview} from '@/domain/product/types';
import {getAllProducts, getProductInfo} from '@/services/products';
import {assertExists} from '@/util/assertions';
import {ProductPage} from '@/pages-impl';
import {transformProductToSku} from '@/domain/product/transformers';


export type ProductPageProps = {
    product: Sku,
    productId: number,
}

export const getStaticPaths: GetStaticPaths = async () => {
    const skusRes = await getAllProducts();

    if (!skusRes.ok) throw new Error('Не удалось получить продукты');

    const {categories} = skusRes.data;
    const previews = categories.reduce((acc: ProductPreview[], {sku}) => [...acc, ...sku], []);

    return {
        paths: previews.map(({id}) => ({
            params: {id: String(id)},
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ProductPageProps, {id: string}> = async ({params}) => {
    assertExists(params);
    const {id} = params;

    const productRes = await getProductInfo(+id);

    if (!productRes.ok) {
        throw new Error('Не удалось загрузить состояние страницы продукта');
    }

    const {product} = productRes.data;

    return ({
        props: {
            product: transformProductToSku(product),
            productId: +id,
        },
        revalidate: 10,
    });
};

export default ProductPage;
