import { MdOutlineFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
export default function UserCard({ searchResult }) {
  return (
    <UserCardSection>
      <UserWrapper>
        <UserImage src={searchResult.avatar_url} alt="User Profile Picture" />
        <StyledHeading>{searchResult.login}</StyledHeading>
        <FavSpan>
          <MdOutlineFavoriteBorder />
        </FavSpan>
      </UserWrapper>
    </UserCardSection>
  );
}

const UserCardSection = styled.section`
  /* display: flex; */
`;
const FavSpan = styled.div`
  background-color: transparent;
`;
const UserWrapper = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
`;
const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* display: block; */
`;
const StyledHeading = styled.h2`
  align-self: center;
  font-size: 1rem;
`;
