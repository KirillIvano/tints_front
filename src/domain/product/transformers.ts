import {Product, Sku} from './types';

export const transformProductToSku = ({sku, related, info, description}: Product): Sku => ({
    ...sku[0],
    related,
    info,
    description,
});
