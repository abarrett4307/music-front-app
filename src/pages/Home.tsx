import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import monkey from '../assets/monkey.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={monkey} className="Home-logo" alt="monkey" />
        <p>
          ENTER THE MUSIC ZONE
        </p>
          <Link to='/login'>
          <button className='basic-button' >Log-in</button>
          </Link>
          <Link to='/signup'>
          <button className='basic-button' >Sign up</button>
          </Link>
      </header>
    </div>
  );
}

export default Home;



