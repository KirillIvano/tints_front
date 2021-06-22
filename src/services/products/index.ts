import {allProductsResource, allShadesResource, bestsellerResource} from '@/resources/product';
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
