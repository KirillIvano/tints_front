import qs from 'qs';

export const getRequestUrl = (url: string, params?: Record<string, string | number | null>) =>
    `${url}?${params ? qs.stringify(params) : ''}`;
