import { Container, StyledAvatar, UserLogin } from './UserItem.styled';
import { UserType } from '../../types/types';

type UserItemType = {
    user: UserType;
};

function UserItem({ user }: UserItemType) {
    return (
        <Container>
            <StyledAvatar src={user.avatar_url} alt={`${user.login}s avatar`} />
            <UserLogin>{user.login}</UserLogin>
        </Container>
    );
}

export default UserItem;
