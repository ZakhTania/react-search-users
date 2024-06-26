import { Link, useParams } from 'react-router-dom';
import { GlobalSlyle } from '../Global.styled';
import Heading from '../components/common/Heading/Heading';
import { UserType } from '../types/types';
import { useEffect, useState } from 'react';
import { getUsers } from '../API/usersApi';
import Wrapper from '../components/common/Wrapper/Wrapper';
import { AppRoutes } from '../routes/appRouters';
import Loader from '../components/common/Loader/Loader';
import UserInfo from '../components/UserInfo/UserInfo';

function UserIdPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState<UserType | null>(null);

    const fetchUsers = async () => {
        try {
            setError('');
            setIsLoading(true);
            const response = await getUsers({
                q: id
            });
            const userData: UserType = response.items[0];
            console.log(userData);
            setUser(userData);
        } catch (e) {
            setError(e.message);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
            <GlobalSlyle />
            <Wrapper>
                <Link to={AppRoutes.USERS}>Поиск пользователей</Link>
                <Heading>{id}</Heading>
                {isLoading ? (
                    <>
                        <Loader />
                        <div>Идёт загрузка....</div>
                    </>
                ) : (
                    <>{error ? <Heading>{error}</Heading> : user && <UserInfo user={user} />}</>
                )}
            </Wrapper>
        </>
    );
}

export default UserIdPage;
