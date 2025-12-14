import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { navigation } from './navigation.ts';
import { Quiz } from '../widgets/quiz/quiz.tsx';
import { QuizVariants } from '../services/quiz/types.ts';
import { AppQueryClientProvider } from '../services/app-query/query-provider.tsx';

export const App = () => {
    return (
        <AppQueryClientProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={navigation.root} element={<Navigate to={navigation.quizWorld} />} />

                    <Route path={`${navigation.quiz}/*`} element={<Navigate to={navigation.quizWorld} />} />
                    <Route path={navigation.quizWorld} element={<Quiz quizType={QuizVariants.world} />} />
                </Routes>
            </BrowserRouter>
        </AppQueryClientProvider>
    );
};
