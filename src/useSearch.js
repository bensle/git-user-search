import axios from 'axios';
import { useEffect, useState } from 'react';

import useLocalStorage from './useLocalStorage';

const GITKEY = process.env.REACT_APP_GITKEY;

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [favoriteUser, setFavoriteUser] = useLocalStorage('Favorites', []);
  const [fetchedFavoriteUser, setFetchedFavoriteUser] = useState([]);

  useEffect(() => {
    setUsers([]);
  }, [query]);

  function getUsers() {
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: 'https://api.github.com/search/users?per_page=100',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Token ${GITKEY}`,
      },
      params: { q: query, page: pageNumber },
    })
      .then(res => {
        setUsers(res.data.items);
        setHasMore(res.data.items.lenght > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
  }

  function getFavorites() {
    const URL = 'https://api.github.com/users/';
    const fetchFavorites = favoriteUser.map(fav =>
      fetch(URL + fav, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Token ${GITKEY}`,
        },
      })
        .then(favs => favs.json())
        .then(favs => favs)
    );
    Promise.all(fetchFavorites).then(favs => {
      setFetchedFavoriteUser(favs);
    });
  }
  useEffect(() => {
    getFavorites();
    /* eslint-disable-next-line */
  }, [favoriteUser]);

  return {
    loading,
    error,
    users,
    hasMore,
    getUsers,
    favoriteUser,
    setFavoriteUser,
    fetchedFavoriteUser,
  };
}
