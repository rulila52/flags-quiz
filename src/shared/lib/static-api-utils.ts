export const STATIC_TIMEOUT_MS = 0.5 * 1000;

export const staticApiTimeout = () => {
    return new Promise((resolve) => {
        return setTimeout(resolve, STATIC_TIMEOUT_MS);
    });
};
