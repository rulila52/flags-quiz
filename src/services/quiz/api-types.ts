import type { Question, QuizVariantsType, UserAnswer } from './types.ts';
import type { AppFetchReturnType } from '../app-fetch/types.ts';

export interface GetQuestionsRequest {
    quizType: QuizVariantsType;
}

export interface GetQuestionsResponse {
    questions: Question[];
}

export interface SubmitQuizRequest {
    answers: UserAnswer[];
}

export type SubmitQuizResponse = null;

export interface QuizApiType {
    getQuestions: (props: GetQuestionsRequest) => Promise<AppFetchReturnType<GetQuestionsResponse>>;
    submitQuiz: (props: SubmitQuizRequest) => Promise<AppFetchReturnType<SubmitQuizResponse>>;
}

// TODO: move to store?

export interface QuizState {
    currentQuestion: number;
    score: number;
    userAnswers: string[];
    isFinished: boolean;
    isLoading: boolean;
}
