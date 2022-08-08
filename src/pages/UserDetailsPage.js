import { useEffect, useState } from 'react';
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
        console.log('currentuser', currentUser);
      })
      .catch(error => {
        setError('The user could not be found');
      });
  }

  return (
    <Container>
      <Heading>UserDetails</Heading>
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
  display: grid;
  justify-items: center;
  /* flex-direction: column; */
  padding: 1rem 0;
`;
const Heading = styled.h1`
  font-size: clamp(1.5rem, 2rem, 4rem);
  padding: 1rem 0;
`;
