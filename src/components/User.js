import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Favorite from './Favorite';
export default function User({ user, onToggleFavoriteUser, favoriteUser }) {
  return (
    <UserListItem>
      <Link to={`/user/${user.login}`}>
        <UserImage src={user.avatar_url} alt="User Profile Picture" />
      </Link>
      <StyledHeading>{user.login}</StyledHeading>
      <Favorite
        users={user}
        onToggleFavoriteUser={onToggleFavoriteUser}
        favoriteUser={favoriteUser}
      />
    </UserListItem>
  );
}

const UserListItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;
`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 5px;
  font-size: 1rem;
`;
