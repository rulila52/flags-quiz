export interface AppFetchReturnType<T> {
    status: 'success' | 'error';
    body: T;
}
