import React, {useState , ChangeEvent} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Taskbar from '../components/Taskbar';
import '../styles/Signup.css'




function CreateAccountButton({ username, password, className,}: { username?: string; password?: string; className?: string;} = {}) {
  function handleClick() {
    alert(`Username: ${username}\nPassword: ${password}`)

  }

  return (
    <button className={className} onClick={handleClick}>
      Create Account
    </button>
  );
}
function Signup() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  return (
    <div className='Signup'>
      <Taskbar/> 
      <header className='Signup-header'>
        <p className='Title'> Sign-up</p>
        <input placeholder='Username' className='Inputbox' value={username} onChange={handleChangeUser}></input>
        <input placeholder='Password' className='Inputbox' value={password} onChange={handleChangePassword}></input>
        <CreateAccountButton className='create-button' username={username} password={password}/>
        
        <div id='login-prompt'>
          <text>or </text> 
          <Link to='/login' className='RedirectButton'>
            login
          </Link>
          <text> if you already have an account</text>
        </div>
        
      </header>
    </div>
  );
}

export default Signup;
