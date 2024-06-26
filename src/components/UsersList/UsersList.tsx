import { Link } from 'react-router-dom';
import { UserType } from '../../types/types';
import UserItem from '../UserItem/UserItem';
import Heading from '../common/Heading/Heading';

type UsersListType = {
    users: UserType[];
    title: string;
};

function UsersList({ users, title }: UsersListType) {
    return (
        <>
            <Heading>{title}</Heading>
            {users.map((user) => (
                <Link to={`/users/${user.login}`} key={user.id}>
                    <UserItem user={user} />
                </Link>
            ))}
        </>
    );
}

export default UsersList;
