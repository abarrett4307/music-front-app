import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Taskbar from '../components/Taskbar';
function Login() {
  return (
    <div>
      <Taskbar/>
      <p>LOGIN</p>
    </div>
  );
}

export default Login;
