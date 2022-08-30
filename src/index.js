import React from 'react';
import createRoute from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoute.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
