import {GetStaticProps} from 'next';

import {CartPage} from '@/pages-impl';
import {getAllProducts} from '@/services/products';
import {ProductPreview} from '@/domain/product/types';


export type CartPageProps = {
    previews: ProductPreview[];
}

const resolveProps = async (): Promise<CartPageProps> => {
    const productsRes = await getAllProducts();

    if (!productsRes.ok) {
        throw new Error('Не удалось загрузить состояние корзины');
    }

    const {data: {categories}} = productsRes;

    const previews = categories.reduce((acc: ProductPreview[], {sku}) => [...acc, ...sku], []);

    return {
        previews,
    };
};

export const getStaticProps: GetStaticProps<CartPageProps> = async () => ({
    props: await resolveProps(),
    revalidate: 10,
});



export default CartPage;
