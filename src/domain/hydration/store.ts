import {injectable} from 'inversify';

import {IHydrationStore} from '@/di/interfaces/IHydrationStore';


@injectable()
export class HydrationStore<TData> implements IHydrationStore<TData> {
    private _data: TData

    putData = (data: TData) => this._data = data;
    getData = () => this._data;
}
