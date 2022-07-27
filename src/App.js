import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="user/:id" element={<UserDetailsPage />} />
      </Routes>
      <Navigation />
    </>
  );
}
