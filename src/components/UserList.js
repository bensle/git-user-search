import styled from 'styled-components';

import UserCard from './UserCard';

export default function UserList({ searchResults }) {
  return (
    <WrapperList>
      {searchResults.map(searchResult => {
        return <UserCard key={searchResult.id} searchResult={searchResult} />;
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
  width: 60vw;
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
