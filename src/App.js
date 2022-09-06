import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';

const App = () => {
  return (
    // ## 13.4 URL 파라미터와 쿼리스트링
    // ## 13.4.1 URL 파라미터
    <Routes>
      <Route element={<Layout />}>    
      {/* Route 컴포넌트에는 index라는 props가 있습니다. 이 props는 path="/"와 동일한 의미를 가집니다. */}
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Route>
      <Route path="/articles" element={<Articles/>}>          
        <Route path="/articles/:id" element={<Article/>}/>
      </Route>
      {/* 와 정말 헷갈려요. */}
      
    </Routes>
  );
};

export default App;