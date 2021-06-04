export type ResponseType<T = Record<string, unknown>> = {
    ok: true;
    data: T;
    status: number;
} | {
    ok: false;
    error: string;
    status: number;
}
