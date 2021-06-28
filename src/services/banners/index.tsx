import {bannerResource} from '@/resources/banners';
import {getApiUrl} from '@/util/getApiUrl';

export const getBanners = async () =>
    bannerResource.makeRequest(getApiUrl('/banner/all'));
