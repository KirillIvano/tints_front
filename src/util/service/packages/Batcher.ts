import {IBatcher} from '../interfaces/IBatcher';
import {ResponseType} from '../types';

export class BatchError extends Error {}

type BatchItem<TRes extends ResponseType> = {
    hash: string;
    promise: Promise<TRes>,
}

export class Batcher<TRes extends ResponseType> implements IBatcher<TRes> {
    private _queue = new Map<string, BatchItem<TRes>>();

    constructor(private readonly intervalMS: number = 50) {}

    enqueue = async (hash: string, getter: () => Promise<TRes>): Promise<TRes> => {
        const batchedItem = this._queue.get(hash);

        if (!batchedItem) {
            const promise =  new Promise<TRes>((resolve, reject) => {
                setTimeout(() => {
                    this._queue.delete(hash);

                    getter()
                        .then(resolve)
                        .catch(() => reject(new BatchError()));
                }, this.intervalMS);
            });

            this._queue.set(hash, {hash, promise});

            return promise;
        }

        return batchedItem.promise;
    }
}
