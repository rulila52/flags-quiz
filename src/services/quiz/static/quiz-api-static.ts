import type {
    GetQuestionsRequest,
    GetQuestionsResponse,
    QuizApiType,
    SubmitQuizRequest,
    SubmitQuizResponse,
} from '../api-types.ts';
import { type Question, QuizVariants, type QuizVariantsType } from '../types.ts';
import { staticApiTimeout } from '../../../shared/lib/static-api-utils.ts';

import { countriesStorage } from './countries-storage.ts';
import { randomSortComparator } from '../../../shared/lib/random-sort.ts';
import { similarFlagsStorage } from './similar-flags-storage.ts';
import type { AppFetchReturnType } from '../../app-fetch/types.ts';

const OPTIONS_COUNT = 8;
const SIMILAR_FLAGS_PROBABILITY = 0.3;

interface GetCountriesArgs {
    quizType: QuizVariantsType;
}

interface GenerateOptionsArgs {
    correctCountryCode: string;
    countriesVariantsCodes: Array<string>;
}

export class QuizApiStatic implements QuizApiType {
    async getQuestions({ quizType }: GetQuestionsRequest): Promise<AppFetchReturnType<GetQuestionsResponse>> {
        await staticApiTimeout();

        const countries = this.getCountries({ quizType });

        const countriesCodes = Object.keys(countries)
            .sort(randomSortComparator);

        const questions: Question[] = [];

        for (const countryCode of countriesCodes) {
            const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;

            const optionCodes = this.generateOptions({
                correctCountryCode: countryCode,
                countriesVariantsCodes: countriesCodes,
            });

            questions.push({
                id: `question_${countryCode}`,
                flagUrl,
                optionCodes,
                answerCode: countryCode,
            });
        }

        // TODO: Вызов мока для app-fetch
        return {
            status: 'success',
            body: {
                questions: questions.sort(randomSortComparator),
            },
        };
    }

    async submitQuiz(_: SubmitQuizRequest): Promise<AppFetchReturnType<SubmitQuizResponse>> {
        await staticApiTimeout();

        return {
            status: 'success',
            body: null,
        };
    }

    private generateWorldQuestions(): Question[] {
        throw new Error('Not implemented yet');
    }

    private getCountries = ({ quizType }: GetCountriesArgs) => {
        switch (quizType) {
            case QuizVariants.world:
            default:
                return countriesStorage;
        }

    };

    private selectRandomElements<T>(array: T[], count: number): T[] {
        const shuffled = [...array].sort(randomSortComparator);
        return shuffled.slice(0, count);
    }

    private generateOptions({ correctCountryCode, countriesVariantsCodes }: GenerateOptionsArgs): string[] {
        const options: string[] = [correctCountryCode];

        // Убираем правильный ответ из общего списка
        const otherCountryCodes = countriesVariantsCodes.filter((code) => {
            return code !== correctCountryCode;
        });

        // Проверяем, есть ли похожие флаги у этой страны
        const similarFlags = similarFlagsStorage[correctCountryCode] || [];
        const availableSimilarFlags = similarFlags.filter((code) => {
            return otherCountryCodes.includes(code);
        });

        // Сколько похожих флагов добавить (с вероятностью)
        let similarFlagsToAdd = 0;
        if (availableSimilarFlags.length > 0 && Math.random() < SIMILAR_FLAGS_PROBABILITY) {
            // Добавляем от 1 до 3 похожих флагов (но не больше, чем доступно)
            similarFlagsToAdd = Math.min(
                Math.floor(Math.random() * 3) + 1,
                availableSimilarFlags.length,
                OPTIONS_COUNT - 1,
            );
        }

        // Добавляем похожие флаги
        if (similarFlagsToAdd > 0) {
            const selectedSimilarFlags = this.selectRandomElements(
                availableSimilarFlags,
                similarFlagsToAdd,
            );

            selectedSimilarFlags.forEach((code) => {
                options.push(code);
            });
        }

        // Добавляем случайные флаги до нужного количества
        const remainingSlots = OPTIONS_COUNT - options.length;
        if (remainingSlots > 0) {
            // Убираем уже добавленные страны из списка для случайного выбора
            const filteredOtherCodes = otherCountryCodes.filter((code) => {
                return !options.includes(code);
            });

            const randomCountryCodes = this.selectRandomElements(
                filteredOtherCodes,
                remainingSlots,
            );

            randomCountryCodes.forEach((code) => {
                options.push(code);
            });
        }

        // Перемешиваем варианты ответов
        return options.sort(randomSortComparator);
    }
}
