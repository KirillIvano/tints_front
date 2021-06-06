import {useEffect} from 'react';
import {getCLS, getFID, getFCP} from 'web-vitals';

import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';
import {IHydrationStore} from '@/di/interfaces/IHydrationStore';

import {useLogger} from './useLogger';
import {useSyncEffect} from './useSyncEffect';
import {useCartStore} from '@/domain/cart/hooks';


export const useAppInit = (props: unknown) => {
    const logger = useLogger();
    const hydrationStore = useInject<IHydrationStore>(DINames.HYDRATION_STORE);
    const cartStore = useCartStore();

    useSyncEffect(() => {
        hydrationStore.putData(props);
    }, [hydrationStore, props]);

    useEffect(() => {
        cartStore.initCart();
    }, [cartStore]);

    useEffect(() => {
        getCLS(logger.log);
        getFID(logger.log);
        getFCP(logger.log);
    }, [logger]);
};
