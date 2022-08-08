import { AiOutlineGithub } from 'react-icons/ai';
import { FaExclamationCircle } from 'react-icons/fa';
import styled from 'styled-components';

import User from '../components/User';

export default function FavoritePage({
  onToggleFavoriteUser,
  favoriteUser,
  fetchedFavoriteUser,
}) {
  return (
    <Container>
      <Heading>
        <GitIcon />
        Favorites
      </Heading>
      <FavWrapper>
        {fetchedFavoriteUser && fetchedFavoriteUser.length > 0 ? (
          fetchedFavoriteUser.map(fetchedUser => {
            return (
              <User
                user={fetchedUser}
                onToggleFavoriteUser={onToggleFavoriteUser}
                favoriteUser={favoriteUser}
                key={fetchedUser.id}
              />
            );
          })
        ) : (
          <NoFavsWrapper>
            <IconWrapper>
              <Nofavs />
            </IconWrapper>
            <NoResultsHeading>
              It seems that you have not set any Favorites yet!
            </NoResultsHeading>
          </NoFavsWrapper>
        )}
      </FavWrapper>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
`;
const FavWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin: 20px 0 5rem 0;
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

const Heading = styled.h1`
  display: flex;
  font-size: clamp(1.5rem, 2rem, 4rem);
  gap: 1rem;
`;
const NoFavsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  border-radius: 10px;
  padding: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;
const NoResultsHeading = styled.p`
  font-size: clamp(1.5rem, 1.8rem, 4rem);
  padding: 10px;
`;

const Nofavs = styled(FaExclamationCircle)`
  color: red;
  font-size: 2.5rem;
`;
const GitIcon = styled(AiOutlineGithub)`
  font-size: clamp(1.5rem, 2rem, 4rem);
`;
