import addDate from 'date-fns/add';
import compareAsc from 'date-fns/compareAsc';

import {ICache} from '../interfaces/ICache';
import {ResponseType} from '../types';


export type CacheItem<TResponse = Record<string, unknown>> = {
    hash: string,
    end: Date,
    response: TResponse,
}

export class Cacher<TRes extends ResponseType> implements ICache<TRes> {
    private _cache = new Map<string, CacheItem>();

    public add(
        hash: string,
        res: TRes,
    ): void {
        this._cache.set(
            hash,
            {
                hash,
                end: addDate(Date.now(), {seconds: 1}),
                response: res,
            },
        );
    }

    public get(hash: string): TRes | null {
        const cachedRes = this._cache.get(hash);

        if (cachedRes) {
            const {end, response} = cachedRes;

            if (compareAsc(end, new Date())) {
                return response as TRes;
            }
        }

        return null;
    }
}

