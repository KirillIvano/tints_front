export type Logger = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    warn: (...args: any[]) => void;
}

export const useLogger = (): Logger => {
    return console;
};
