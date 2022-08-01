import { useRef, useCallback } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';

export default function UserList({
  users,
  loading,
  hasMore,
  setPageNumber,
  getUsers,
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
              <FavSpan>
                <MdOutlineFavoriteBorder />
              </FavSpan>
            </UserListItem>
          );
        } else {
          return (
            <UserListItem key={user.id}>
              <UserImage src={user.avatar_url} alt="User Profile Picture" />
              <StyledHeading>{user.login}</StyledHeading>
              <FavSpan>
                <MdOutlineFavoriteBorder />
              </FavSpan>
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
  /* width: 60vw; */
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
const FavSpan = styled.div`
  background-color: transparent;
  position: absolute;
  font-size: 1.7rem;
  color: hotpink;
  right: 0;
  top: 0;
  padding: 5px;
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
