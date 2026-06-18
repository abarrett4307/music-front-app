import React from 'react';
import { BrowserRouter, Route, Routes, Link, redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    
    <BrowserRouter basename="/music-front-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;