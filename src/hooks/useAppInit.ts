import {useEffect} from 'react';
import {getCLS, getFID, getFCP} from 'web-vitals';
import {useLogger} from './useLogger';

export const useAppInit = () => {
    const logger = useLogger();

    useEffect(() => {
        getCLS(logger.log);
        getFID(logger.log);
        getFCP(logger.log);
    }, [logger]);
};
