import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';
import useSearch from './useSearch';

export default function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const {
    users,
    getUsers,
    favoriteUser,
    setFavoriteUser,
    fetchedFavoriteUser,
  } = useSearch(query, pageNumber);

  function handleChange(event) {
    setQuery(event.target.value);
    setPageNumber(1);
  }

  function toggleFavoriteUsers(id) {
    if (favoriteUser.includes(id)) {
      const newFavoriteUsers = favoriteUser.filter(favID => favID !== id);
      setFavoriteUser(newFavoriteUsers);
    } else {
      setFavoriteUser([...favoriteUser, id]);
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHandleChange={handleChange}
              query={query}
              users={users}
              getUsers={getUsers}
              onToggleFavoriteUser={toggleFavoriteUsers}
              favoriteUser={favoriteUser}
            />
          }
        />
        <Route
          path="favorites"
          element={
            <FavoritesPage
              favoriteUser={favoriteUser}
              onToggleFavoriteUser={toggleFavoriteUsers}
              fetchedFavoriteUser={fetchedFavoriteUser}
            />
          }
        />
        <Route
          path="user/:id"
          element={
            <UserDetailsPage
              onToggleFavoriteUser={toggleFavoriteUsers}
              favoriteUser={favoriteUser}
            />
          }
        />
      </Routes>
      <Navigation />
    </>
  );
}
