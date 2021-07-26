import {BannerDto} from '@/resources/banners/dto';

import {Banner, Product, Sku} from './types';


export const transformProductToSku = ({sku, related, info, description}: Product): Sku => ({
    ...sku[0],
    related,
    info,
    description,
});

export const getBannerFromDto = (banner: BannerDto): Banner => banner;
