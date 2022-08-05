import styled from 'styled-components';

export default function Details({ user, onToggleFavoriteUser, favoriteUser }) {
  return (
    <div>
      <StyledHeading>Hallo {user.login}</StyledHeading>
    </div>
  );
}
const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 5px;
  font-size: 1rem;
`;
