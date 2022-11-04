import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useStateContext } from './context/context';
import { Routes, Route } from 'react-router-dom';

// pages
import { HomeScreen, ActorScreen, MovieInformationScreen, ProfileScreen } from './pages';
import SearchBar from './components/SearchBar';
import SearchFeed from './pages/SearchFeed';
import InitialLoading from './components/InitialLoading';
import Error from './components/Error';

const App = () => {
  const { initialState } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div 
      style={{
        background: 'linear-gradient(90deg, #b6b6b6ff 0%, #7a7afcff 51%)',
        width: '100vw',
        height: '100vh'
      }}>
        <InitialLoading />
     </div>
    );
  }
  return (
    <div>
      <SearchBar />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/movies/:id' element={<MovieInformationScreen />} />
        {/*  */}
        <Route path='/actors/:id' element={<ActorScreen />} />
        <Route path='/profile/:id' element={<ProfileScreen />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
      {/* <TestDetail /> */}
    </div>
  );
};

export default App;
