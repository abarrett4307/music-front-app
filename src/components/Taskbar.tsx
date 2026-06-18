import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import '../styles/Taskbar.css'

function Taskbar() {
    return (
        <div id="Taskbar">
                <Link className='LinkButton' to='/'>
                    <text>Home</text>
                </Link>
        </div>
    )
}

export default Taskbar