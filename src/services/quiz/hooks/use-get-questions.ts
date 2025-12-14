import { useQuery } from 'react-query';
import { useMemo } from 'react';
import type { GetQuestionsRequest } from '../api-types.ts';
import { quizQueryKeys } from '../query-keys.ts';
import { quizApi } from '../index.ts';

interface UseGetQuestionsArgs extends GetQuestionsRequest {}

export const useGetQuestions = ({
    quizType,
}: UseGetQuestionsArgs) => {
    const queryKey = useMemo(() => {
        return quizQueryKeys.getQuestions();
    }, []);

    const {
        isFetching,
        error,
        data,
    } = useQuery({
        queryKey,
        queryFn: () => {
            return quizApi.getQuestions({ quizType });
        },
    });

    return {
        isFetching,
        error,
        body: data?.body,
        queryKey,
    };
};
