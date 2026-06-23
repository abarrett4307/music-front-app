import React, {createContext, useContext, useState , ChangeEvent} from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Taskbar from '../components/Taskbar';
import '../styles/Login.css'
import '../styles/Basics.css'

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function loginAccount() {
    const response = await fetch('/music-front-app/login/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username,
        password: password }), 
    }).then(response => response.json());
    alert(response.status);
  }

  function useLogin() {
    const navigate = useNavigate();
    navigate("/dashboard", { replace: true } );

  }
  
  return (
    <div className='Login'>
      <Taskbar/> 
      <header className='Login-header'>
        <p className='Title'>Log in to your account</p>
        <input placeholder='Username' className='Inputbox' value={username} onChange={handleChangeUser}></input>
        <input placeholder='Password' className='Inputbox' value={password} onChange={handleChangePassword}></input>
        <button className='login-button' onClick={loginAccount}>Log in</button>
        <div id='signup-prompt'>
          <text>or </text> 
          <Link to='/signup' className='RedirectButton'>
            sign-up
          </Link>
          <text> if you do not have an account</text>
        </div>
        
      </header>
    </div>
  );
}

export default Login;
