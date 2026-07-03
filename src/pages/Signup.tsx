import React, {useState , ChangeEvent} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Taskbar from '../components/Taskbar';
import '../styles/Signup.css'
import '../styles/Basics.css'

function Signup() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

    async function createAccount() {
    const response = await fetch('/music-front-app/signup/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username,
        password: password })
    }).then(response => response.json());
    alert(response.message);
    
  }
  
  
  return (
    <div className='Signup'>
      <Taskbar/> 
      <div className='Signup-header'>
        <p className='Title'> Sign-up for a new account</p>
        <input placeholder='Username' className='Inputbox' value={username} onChange={handleChangeUser}></input>
        <input placeholder='Password' className='Inputbox' value={password} onChange={handleChangePassword}></input>
        <button className='create-button' onClick={createAccount}> Create Account</button>
        <div id='login-prompt'>
          <text>or </text> 
          <Link to='/login' className='RedirectButton'>
            login
          </Link>
          <text> if you already have an account</text>
        </div>
        
      </div>
    </div>
  );
}

export default Signup;
