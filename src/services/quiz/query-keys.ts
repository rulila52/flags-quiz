export const quizPrefix = '@quiz';

export const quizQueryKeys = {
    getQuestions: () => {
        return [`${quizPrefix}/getQuestions`];
    },
    submitQuiz: () => {
        return [`${quizPrefix}/submitQuiz`];
    },
} as const;
