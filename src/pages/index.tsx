import {GetStaticProps} from 'next';

import {ProductPreview} from '@/domain/product/types';
import {MainPage} from '@/pages-impl';
import {getBestsellers} from '@/services/products';


export type MainPageProps = {
    bestsellers: ProductPreview[];
}

const resolveProps = async (): Promise<MainPageProps> => {
    const bestsellersRes = await getBestsellers();

    if (!bestsellersRes.ok) {
        throw new Error('xxx');
    }

    return {
        bestsellers: bestsellersRes.data.products,
    };
};

export const getStaticProps: GetStaticProps<MainPageProps> = async () => ({
    props: await resolveProps(),
    revalidate: 10,
});

export default MainPage;
