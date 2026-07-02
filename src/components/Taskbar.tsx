import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import '../styles/Taskbar.css'

function Taskbar() {
    return (
        <div id="Taskbar">
            <div id='left'>
                <Link className='LinkButton' to='/'>
                    <text>Home</text>
                </Link>
                
                <Link className='LinkButton' to='/dashboard'>
                    <text>Dashboard</text>
                </Link>
                
            </div>
            <div id='right'>
                <Link className='LinkButton' to='/profile/'>
                My Profile
                </Link>
            </div>
        </div>
    )
}

export default Taskbar