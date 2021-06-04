export interface IHydrationStore<TData = unknown> {
    putData: (data: TData) => void;
    getData: () => TData;
}
