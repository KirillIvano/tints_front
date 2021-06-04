import {useEffect} from 'react';
import {getCLS, getFID, getFCP} from 'web-vitals';

import {DINames} from '@/di/keys';
import {useInject} from '@/di/useInject';
import {IHydrationStore} from '@/di/interfaces/IHydrationStore';

import {useLogger} from './useLogger';
import {useSyncEffect} from './useSyncEffect';


export const useAppInit = (props: unknown) => {
    const logger = useLogger();
    const hydrationStore = useInject<IHydrationStore>(DINames.HYDRATION_STORE);

    useSyncEffect(() => {
        hydrationStore.putData(props);
    }, [hydrationStore, props]);

    useEffect(() => {
        getCLS(logger.log);
        getFID(logger.log);
        getFCP(logger.log);
    }, [logger]);
};
