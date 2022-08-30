import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    // ## 13.4 URL 파라미터와 쿼리스트링
    // ## 13.4.1 URL 파라미터
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
  );
};

export default App;


/*
Smiley
untitled

*/