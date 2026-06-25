import React from 'react';
import { BrowserRouter, Route, Routes, createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ReactDOM from 'react-dom/client';





function App() {
  return (
    <BrowserRouter basename="/music-front-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
