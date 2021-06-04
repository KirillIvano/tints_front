export type Logger = {
    log: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
}

export const useLogger = (): Logger => {
    return console;
};
