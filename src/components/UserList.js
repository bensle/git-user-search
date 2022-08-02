import { useRef, useCallback } from 'react';
import styled from 'styled-components';

import Favorite from './Favorite';

export default function UserList({
  users,
  loading,
  hasMore,
  setPageNumber,
  getUsers,
  onToggleFavoriteUser,
  favoriteUser,
}) {
  const observer = useRef();
  const lastUserRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
          getUsers();
        }
      });
      if (node) observer.current.observe(node);
    },
    /* eslint-disable-next-line */
    [loading, hasMore]
  );
  return (
    <WrapperList>
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return (
            <UserListItem key={user.id}>
              <UserImage src={user.avatar_url} alt="User Profile Picture" />
              <StyledHeading ref={lastUserRef}>{user.login}</StyledHeading>

              <Favorite
                users={user}
                onToggleFavoriteUser={onToggleFavoriteUser}
                favoriteUser={favoriteUser}
              />
            </UserListItem>
          );
        } else {
          return (
            <UserListItem key={user.id}>
              <UserImage src={user.avatar_url} alt="User Profile Picture" />
              <StyledHeading>{user.login}</StyledHeading>
              <Favorite
                users={user}
                onToggleFavoriteUser={onToggleFavoriteUser}
                favoriteUser={favoriteUser}
              />
            </UserListItem>
          );
        }
      })}
    </WrapperList>
  );
}

const WrapperList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

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
