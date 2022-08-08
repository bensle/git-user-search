import styled from 'styled-components';

import User from './User';
export default function UserList({
  users,
  onToggleFavoriteUser,
  favoriteUser,
}) {
  return (
    <WrapperList>
      {users.map(user => {
        return (
          <User
            key={user.id}
            user={user}
            onToggleFavoriteUser={onToggleFavoriteUser}
            favoriteUser={favoriteUser}
          />
        );
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
  margin-bottom: 5rem;
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
