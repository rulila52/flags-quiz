import type { QuizApiType } from "./api-types.ts";
import { QuizApi } from "./quiz-api.ts";
import { QuizApiStatic } from "./static/quiz-api-static.ts";

const createQuizApi = (): QuizApiType => {
    const useMock = import.meta.env.APP_USE_STATIC_API === "true";

    if (useMock) {
        return new QuizApiStatic();
    }

    return new QuizApi();
};

export const quizApi = createQuizApi();
