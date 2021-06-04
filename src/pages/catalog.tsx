import {GetStaticProps} from 'next';

import {CategoryPreview, ProductPreview, Shade} from '@/domain/product/types';
import {CatalogPage} from '@/pages-impl';
import {getAllProducts, getAllShades} from '@/services/products';


export type CatalogProps = {
    previews: ProductPreview[];
    categories: CategoryPreview[];
    shades: Shade[];
}

const Catalog = CatalogPage;

const resolveProps = async (): Promise<CatalogProps> => {
    const [productsRes, shadesRes] = await Promise.all([
        getAllProducts(),
        getAllShades(),
    ]);

    if (!productsRes.ok || !shadesRes.ok) {
        throw new Error('Не удалось загрузить состояние страницы категорий');
    }

    const {data: {categories}} = productsRes;
    const {data: {shades}} = shadesRes;

    const previews = categories.reduce((acc: ProductPreview[], {sku}) => [...acc, ...sku], []);
    const categoriesPreviews = categories.map(
        el => ({
            ...el,
            sku: el.sku.map(({id}) => id),
        }),
    );

    return {
        shades,
        previews,
        categories: categoriesPreviews,
    };
};

export const getStaticProps: GetStaticProps<CatalogProps> = async () => ({
    props: await resolveProps(),
    revalidate: 10,
});

export default Catalog;
