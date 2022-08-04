import { AiOutlineGithub } from 'react-icons/ai';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';

export default function HomePage({
  onHandleChange,
  query,
  users,
  getUsers,
  onToggleFavoriteUser,
  favoriteUser,
}) {
  return (
    <Container>
      <HeadWrapper>
        <Heading>
          <GitIcon /> GitHub User-Search
        </Heading>
        <SearchBar
          onHandleChange={onHandleChange}
          query={query}
          getUsers={getUsers}
        />
      </HeadWrapper>
      <ListWrapper>
        <UserList
          users={users}
          onToggleFavoriteUser={onToggleFavoriteUser}
          favoriteUser={favoriteUser}
        />
      </ListWrapper>
    </Container>
  );
}
const HeadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 1rem;
  position: relative;
  top: 0;
  padding-top: 1rem;
`;
const ListWrapper = styled.div`
  overflow-y: auto;
`;
const Container = styled.main`
  display: grid;
  height: 100vh;
`;

const Heading = styled.h1`
  display: flex;
  font-size: clamp(1.5rem, 2rem, 4rem);
  gap: 1rem;
`;

const GitIcon = styled(AiOutlineGithub)`
  font-size: clamp(1.5rem, 2rem, 4rem);
`;
