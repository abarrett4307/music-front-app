import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import monkey from '../assets/monkey.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={monkey} id="Img-logo" alt="monkey" />
        <p id="name-logo"> 
          The Music Nest
        </p>
        <p>
          ENTER THE MUSIC ZONE
        </p>
          <Link to='/login'>
            <button className='basic-button' >Login</button>
          </Link>
          <Link to='/signup'>
            <button className='basic-button' >Sign up</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;



