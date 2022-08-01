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
  const { users, hasMore, loading, error } = useSearch(query, pageNumber);

  function handleChange(event) {
    setQuery(event.target.value);
    setPageNumber(1);
    console.log('USERS', users);
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
              loading={loading}
              hasMore={hasMore}
              setPageNumber={() => setPageNumber()}
            />
          }
        />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="user/:id" element={<UserDetailsPage />} />
      </Routes>
      <Navigation />
    </>
  );
}
