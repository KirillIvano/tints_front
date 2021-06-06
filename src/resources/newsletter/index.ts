import {Resource} from '@/util/service';
import {SubscribeToNewsDto} from './dto';

export const subscribeToNews = new Resource<{categories: CategoryDto[]}>({
    shouldBatch: true,
    shouldCache: true,
});
