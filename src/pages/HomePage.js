import { AiOutlineGithub } from 'react-icons/ai';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';

export default function HomePage({
  onHandleChange,
  query,
  users,
  loading,
  error,
  hasMore,
  setPageNumber,
}) {
  return (
    <Container>
      <Heading>
        <GitIcon /> GitHub User-Search
      </Heading>
      <SearchBar onHandleChange={onHandleChange} query={query} />
      <UserList
        users={users}
        loading={loading}
        error={error}
        hasMore={hasMore}
        setPageNumber={setPageNumber}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const Heading = styled.h1`
  display: flex;
  font-size: clamp(1.5rem, 2rem, 4rem);
  gap: 1rem;
`;

const GitIcon = styled(AiOutlineGithub)`
  font-size: clamp(1.5rem, 2rem, 4rem);
`;
