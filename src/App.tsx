import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/appRouters';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import UserIdPage from './pages/UserIdPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Routes>
            <Route path={AppRoutes.HOME} element={<HomePage />} />
            <Route path={AppRoutes.USERS} element={<UsersPage />} />
            <Route path={AppRoutes.USERS_ID} element={<UserIdPage />} />
            <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    );
}
export default App;
