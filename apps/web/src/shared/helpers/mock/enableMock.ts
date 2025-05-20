/**
 * Node.js（Server Components）でMSWによるモックを有効にする
 */
export const enableMockNode = async () => {
    if (
        process.env.NEXT_RUNTIME !== 'nodejs' ||
        process.env.NODE_ENV !== 'development'
    ) {
        return;
    }

    const { server } = await import('@/mocks/node');
    server.listen();
};

/**
 * ブラウザ（Client Components）でMSWによるモックを有効にする
 */
export const enableMockBrowser = async () => {
    if (
        typeof window === 'undefined' ||
        process.env.NODE_ENV !== 'development'
    ) {
        return;
    }

    const { worker } = await import('@/mocks/browser');
    worker.start();
};
