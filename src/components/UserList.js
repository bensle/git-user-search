import styled from 'styled-components';

import UserCard from './UserCard';

export default function UserList({ searchResults }) {
  return (
    <WrapperDiv>
      {searchResults.map(searchResult => {
        return <UserCard key={searchResult.id} searchResult={searchResult} />;
      })}
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 20px;
`;
