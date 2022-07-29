import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';

export default function App() {
  const [searchInput, setSearchinput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const GITKEY = process.env.REACT_APP_GITKEY;

  const URL = `https://api.github.com/search/users?q=${searchInput}`;

  function fetchData() {
    if (URL !== 'https://api.github.com/search/users?q=') {
      fetch(URL, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Token ${GITKEY}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          return setSearchResults(data.items);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // const handleScroll = () => {
  //   let userScrollHeight = window.innerHeight + window.scrollY;
  //   let windowBottomHeight = document.documentElement.offsetHeight;
  //   if (userScrollHeight >= windowBottomHeight) {
  //     fetchData();
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  const handleChange = event => {
    setSearchinput(event.target.value);
    console.log('Result', searchResults);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHandleChange={handleChange}
              searchInput={searchInput}
              onFetchData={fetchData}
              searchResults={searchResults}
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
