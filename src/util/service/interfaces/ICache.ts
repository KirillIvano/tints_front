import {ResponseType} from '../types';

export interface ICache<TRes extends ResponseType> {
    add(hash: string, item: TRes): void;
    get(hash: string): TRes | null;
}
