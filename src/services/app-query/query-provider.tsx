import React, { useState } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import type { AppMutationMeta } from './create-meta.ts';

interface AppQueryProviderProps {
    children: React.ReactNode;
}

export const AppQueryClientProvider = ({
    children,
}: AppQueryProviderProps): JSX.Element => {
    const [queryClient] = useState(() => {return new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: 0,
            },
        },
        mutationCache: new MutationCache({
            onError: (error, variables, ctx, mutation): void => {
                if (mutation.meta && (mutation.meta as AppMutationMeta).showError) {
                    // TODO: Обработка всплывающей ошибки
                    // dispatch(uiActions.showErrorNotification(error));
                }
            },
        }),
        queryCache: new QueryCache({
            onError: (error, query): void => {
                if (query.meta && (query.meta as AppMutationMeta).showError) {
                    // TODO: Обработка всплывающей ошибки
                    // dispatch(uiActions.showErrorNotification(error));
                }
            },
        }),
    });});

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
