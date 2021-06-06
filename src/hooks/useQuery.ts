import {useRouter} from 'next/router';


export const useQuery = <TQuery extends Record<string, unknown>>() => {
    const router = useRouter();

    return router.query as TQuery;
};
