import { type QuizVariantsType } from '../../services/quiz/types.ts';
import { useGetQuestions } from '../../services/quiz/hooks/use-get-questions.ts';

interface QuizProps {
    quizType: QuizVariantsType;
}

export const Quiz = ({ quizType }: QuizProps): JSX.Element => {
    const {
        body,
        isFetching,
    } = useGetQuestions({
        quizType,
    });

    if (isFetching) {
        return <>Loading...</>;
    }

    return (
        <>
            {body?.questions.map((question) => {
                return (
                    <>
                        {question.flagUrl}
                        <br/>
                        {question.optionCodes.toString()}
                        <br/>
                        <br/>
                    </>
                );
            })}
        </>
    );
};
