import { Link } from 'react-router-dom';
import { UserType } from '../../types/types';
import { UserInfoImg, UserInfoWrap } from './UserInfo.styled';


type UserInfoType = {
    user: UserType;
};

function UserInfo({ user }: UserInfoType) {
    return (
        <UserInfoWrap>
            <UserInfoImg src={user.avatar_url} alt="profile picture" />
            <Link to={user.html_url}>{user.html_url}</Link>
        </UserInfoWrap>
    );
}

export default UserInfo;
