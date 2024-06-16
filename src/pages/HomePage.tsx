import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/appRouters';

function HomePage() {
    return (
        <div>
            <Link to={AppRoutes.USERS}>Поиск пользователей</Link>
        </div>
    );
}

export default HomePage;
