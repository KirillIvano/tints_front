import {ResponseType} from '../types';

export interface IBatcher<TRes extends ResponseType> {
    enqueue(hash: string, getter: () => Promise<TRes>): Promise<TRes>;
}
