import {SERVER_ORIGIN} from '@/settings';


export const getImageUrl = (path: string) =>
    `${SERVER_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
