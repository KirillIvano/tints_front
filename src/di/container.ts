import {Container} from 'inversify';

import {ProductStore} from '@/domain/product/store';

import {DINames} from './keys';
import {IProductStore} from './interfaces/IProductStore';
import {IHydrationStore} from './interfaces/IHydrationStore';
import {HydrationStore} from '@/domain/hydration/store';


const container = new Container();

container.bind<IProductStore>(DINames.PRODUCT_STORE).toConstantValue(new ProductStore());
container.bind<IHydrationStore>(DINames.HYDRATION_STORE).toConstantValue(new HydrationStore());

export {container};
