import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Details from '../components/Details';

const GITKEY = process.env.REACT_APP_GITKEY;

export default function UserDetailsPage({
  onToggleFavoriteUser,
  favoriteUser,
}) {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUser();
    /* eslint-disable-next-line */
  }, []);

  function getUser() {
    const URL = 'https://api.github.com/users/' + id;
    fetch(URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Token ${GITKEY}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        response.message
          ? setError('The user could not be found')
          : setCurrentUser(response);
      })
      .catch(error => {
        setError('The user could not be found');
      });
  }

  return (
    <Container>
      <HeadWrapper>
        <Heading>
          <GitIcon />
          UserDetails
        </Heading>
      </HeadWrapper>

      {currentUser && (
        <Details
          user={currentUser}
          onToggleFavoriteUser={onToggleFavoriteUser}
          favoriteUser={favoriteUser}
        />
      )}
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
`;
const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 1rem 0;
  position: relative;
  top: 0;
`;
const GitIcon = styled(AiOutlineGithub)`
  font-size: clamp(1.5rem, 2rem, 4rem);
`;
const Heading = styled.h1`
  display: flex;
  font-size: clamp(1.5rem, 2rem, 4rem);
  gap: 1rem;
`;
