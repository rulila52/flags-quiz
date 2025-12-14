export const QuizVariants = {
    world: 'world',
} as const;

export type QuizVariantsType = keyof typeof QuizVariants;

export interface Question {
    id: string;
    flagUrl: string;
    optionCodes: string[];
    answerCode: string;
    // TODO: add difficulty?
    // difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserAnswer {
    questionId: string;
    answer: string;
    isCorrect: boolean;
    timeSpent: number;
}
