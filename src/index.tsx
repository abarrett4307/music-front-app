import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TierList from './pages/TierList';
import { basename } from 'path';

const router = createBrowserRouter([
  {
  path:'/',
  element:<Home />,
  errorElement: <div>error: <Link to='/'>Return Home</Link></div>
  },
  {
    path:'/login',
    element:<Login />,
  },
  {
    path:'/signup',
    element:<Signup />,
  },
  {
    path:'/dashboard',
    element:<Dashboard />,
  },
  {
    path:'/tierlist/:id',
    element:<TierList />
  }
], {basename:'/music-front-app'});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
