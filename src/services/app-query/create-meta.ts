export interface AppMutationMeta {
    showError?: boolean;
}

export interface AppQueryMeta {
    showError?: boolean;
}

export interface CreateMutationMetaArgs extends Partial<AppMutationMeta> {}

export const createMutationMeta = ({
    showError = true,
}: CreateMutationMetaArgs): AppQueryMeta => {
    return {
        showError,
    };
};

export interface CreateQueryMetaArgs extends Partial<AppMutationMeta> {}

export const createQueryMeta = ({
    showError = true,
}: CreateQueryMetaArgs): AppQueryMeta => {
    return {
        showError,
    };
};
