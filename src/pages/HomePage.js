import { AiOutlineGithub } from 'react-icons/ai';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';

export default function HomePage() {
  return (
    <Container>
      <Heading>
        <GitIcon /> GitHub User-Search
      </Heading>
      <SearchBar />
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
