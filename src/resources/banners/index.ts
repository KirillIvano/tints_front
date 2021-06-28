import {Resource} from '@/util/service';
import {BannerDto} from './dto';

export const bannerResource = new Resource<{banner: BannerDto[]}>({
    shouldCache: true,
});
