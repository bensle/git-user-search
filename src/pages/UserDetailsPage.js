import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <>
      <h1>UserDetails</h1>
      {/* <h2>{currentUser.login}</h2> */}
      {currentUser && (
        <Details
          user={currentUser}
          onToggleFavoriteUser={onToggleFavoriteUser}
          favoriteUser={favoriteUser}
        />
      )}
    </>
  );
}
