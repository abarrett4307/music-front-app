import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;