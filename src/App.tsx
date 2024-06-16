import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/appRouters';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Routes>
            <Route path={AppRoutes.HOME} element={<HomePage />} />
            <Route path={AppRoutes.USERS} element={<UsersPage />} />
        </Routes>
    );
}
export default App;
