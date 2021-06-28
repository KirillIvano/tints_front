import {GetStaticProps} from 'next';

import {Banner, ProductPreview} from '@/domain/product/types';
import {MainPage} from '@/pages-impl';
import {getBestsellers} from '@/services/products';
import {getBanners} from '@/services/banners';
import {getBannerFromDto} from '@/domain/product/transformers';


export type MainPageProps = {
    bestsellers: ProductPreview[];
    banner: Banner;
}

const resolveProps = async (): Promise<MainPageProps> => {
    const bestsellersRes = await getBestsellers();
    const bannerRes = await getBanners();

    if (!bestsellersRes.ok || !bannerRes.ok) {
        throw new Error('fetching main page failed');
    }

    return {
        bestsellers: bestsellersRes.data.products,
        banner: getBannerFromDto(bannerRes.data.banner[0]),
    };
};

export const getStaticProps: GetStaticProps<MainPageProps> = async () => ({
    props: await resolveProps(),
    revalidate: 10,
});

export default MainPage;
