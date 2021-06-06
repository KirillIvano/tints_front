import {Container} from 'inversify';

import {ProductStore} from '@/domain/product/store';
import {CartStore} from '@/domain/cart/store';
import {HydrationStore} from '@/domain/hydration/store';

import {DINames} from './keys';

import {IProductStore} from './interfaces/IProductStore';
import {IHydrationStore} from './interfaces/IHydrationStore';
import {ICartStore} from './interfaces/ICartStore';


const container = new Container();

container.bind<IProductStore>(DINames.PRODUCT_STORE).toConstantValue(new ProductStore());
container.bind<IHydrationStore>(DINames.HYDRATION_STORE).toConstantValue(new HydrationStore());
container.bind<ICartStore>(DINames.CART_STORE).toConstantValue(new CartStore());

export {container};
