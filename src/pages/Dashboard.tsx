import React from 'react';
import Taskbar from "../components/Taskbar";
import '../styles/Dashboard.css'

function Dashboard() {
    return (
        <div>
            <Taskbar />
            <div id="dashboard-main">
                <text className='Page-title'> My Dashboard</text>
            <div id='boxes-items'>
                <div  className="Box-list" id="left-items">
                    <div className="Item-list" id="music">
                        <text> music</text>
                    </div>
                    <div className="Item-list" id="tiers" >
                        tiers
                    </div>
                </div>
                <div className="Box-list" id="right-items">
                    <div className="Item-list" id="friends">
                        <text>friends</text>
                    </div>
                    <div className="Item-list" id="clubs">
                        <text>clubs</text>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Dashboard;