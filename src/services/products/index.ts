import {
    allProductsResource,
    allShadesResource,
    bestsellerResource,
    productResource,
} from '@/resources/product';
import {getApiUrl} from '@/util/getApiUrl';


export const getAllProducts = () => allProductsResource.makeRequest(
    getApiUrl('/product/all'),
    {method: 'GET'},
);

export const getAllShades = () => allShadesResource.makeRequest(
    getApiUrl('/shade/all'),
    {method: 'GET'},
);

export const getBestsellers = () => bestsellerResource.makeRequest(
    getApiUrl('/product/bestsellers'),
    {method: 'GET'},
);

export const getProductInfo = (productId: number) => productResource.makeRequest(
    getApiUrl(`/product/${productId}`),
    {method: 'GET'},
);
