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
      <Heading>Favorites</Heading>
      {fetchedFavoriteUser && fetchedFavoriteUser.length > 0 ? (
        fetchedFavoriteUser.map(fetchedUser => {
          return (
            <FavWrapper key={fetchedUser.id}>
              <div>
                <User
                  user={fetchedUser}
                  onToggleFavoriteUser={onToggleFavoriteUser}
                  favoriteUser={favoriteUser}
                />
              </div>
            </FavWrapper>
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
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;
const FavWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 20px;
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
  font-size: clamp(1.5rem, 2rem, 4rem);
`;
const NoFavsWrapper = styled.div`
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
const NoResultsHeading = styled.h2`
  font-size: clamp(1.5rem, 1.8rem, 4rem);
  /* margin: 2rem; */
  padding: 10px;
`;

const Nofavs = styled(FaExclamationCircle)`
  /* margin-top: 2rem; */
  color: red;
  font-size: 2.5rem;
`;
