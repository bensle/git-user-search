import { MdOutlineFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
export default function UserCard({ searchResult }) {
  return (
    <UserListItem>
      <UserImage src={searchResult.avatar_url} alt="User Profile Picture" />
      <StyledHeading>{searchResult.login}</StyledHeading>
      <FavSpan>
        <MdOutlineFavoriteBorder />
      </FavSpan>
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
