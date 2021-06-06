import {useInject} from '@/di/useInject';
import {DINames} from '@/di/keys';
import {ICartStore} from '@/di/interfaces/ICartStore';


export const useCartStore = () =>
    useInject<ICartStore>(DINames.CART_STORE);

