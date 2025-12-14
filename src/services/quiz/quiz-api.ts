/* comment: Not implemented api */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
    GetQuestionsRequest,
    GetQuestionsResponse,
    QuizApiType,
    SubmitQuizRequest,
    SubmitQuizResponse,
} from './api-types.ts';
import type { AppFetchReturnType } from '../app-fetch/types.ts';

export class QuizApi implements QuizApiType {
    async getQuestions({ quizType }: GetQuestionsRequest): Promise<AppFetchReturnType<GetQuestionsResponse>> {
        throw new Error('Not implemented yet');
    }

    async submitQuiz({ answers }: SubmitQuizRequest): Promise<AppFetchReturnType<SubmitQuizResponse>> {
        throw new Error('Not implemented yet');
    }
}
