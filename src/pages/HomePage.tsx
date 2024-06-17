import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/appRouters';
import { GlobalSlyle } from '../Global.styled';
import Wrapper from '../components/common/Wrapper/Wrapper';

function HomePage() {
    return (
        <>
            <GlobalSlyle />
            <Wrapper>
                <Link to={AppRoutes.USERS}>Поиск пользователей</Link>
            </Wrapper>
        </>
    );
}

export default HomePage;
