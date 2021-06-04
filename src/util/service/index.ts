import type {IBatcher} from './interfaces/IBatcher';
import type {ICache} from './interfaces/ICache';
import type {ResponseType} from './types';

import {Batcher} from './packages/Batcher';
import {Cacher} from './packages/Cacher';
import {request} from './utils/request';


type ResourceOptions = {
    /* tells the resource to cache requests on client during some amount of time */
    shouldCache?: boolean;

    /* tells resource to batch requests (throttle strategy) */
    shouldBatch?: boolean;
};

export class Resource<
    TResponse extends Record<string, unknown>,
> {
    private cacher: ICache<ResponseType<TResponse>> = new Cacher();
    private batcher: IBatcher<ResponseType<TResponse>> = new Batcher();

    constructor(
        private readonly options: ResourceOptions = {},
    ) {}

    public async makeRequest(
        url: string,
        options: RequestInit,
    ): Promise<ResponseType<TResponse>> {
        const {shouldBatch, shouldCache} = this.options;
        const requestHash = this.getRequestHash(url, options);

        const cachedResult = shouldCache ? this.cacher.get(requestHash) : null;
        if (cachedResult) {
            return cachedResult as ResponseType<TResponse>;
        }

        let result;
        if (shouldBatch) {
            result = await this.batcher.enqueue(requestHash, () => request<TResponse>(url, options));
        } else {
            result = await request<TResponse>(url, options);
        }

        if (shouldCache) {
            this.cacher.add(requestHash, result);
        }

        return result;
    }

    private getRequestHash(url: string, options: RequestInit) {
        return `${url}|${JSON.stringify(options)}`;
    }
}
