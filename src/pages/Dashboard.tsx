import React from 'react';
import Taskbar from "../components/Taskbar";
import Itemlist from '../components/Itemlist';
import '../styles/Dashboard.css'
import '../styles/Basics.css'

function Dashboard() {
    return (
        <div>
            <Taskbar />
            <div id="dashboard-main">
                <text className='Page-title'> My Dashboard</text>
            <div id='boxes-items'>
                <div  className="Box-list" id="left-items">
                    <Itemlist title="Music">
                        list
                    </Itemlist>
                    <Itemlist title="Tiers" >
                        list
                    </Itemlist>
                </div>
                <div className="Box-list" id="right-items">
                    <Itemlist title="Friends">
                        list
                    </Itemlist>
                    <Itemlist title="Clubs">
                        list
                    </Itemlist>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Dashboard;