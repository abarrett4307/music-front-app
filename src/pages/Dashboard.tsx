import React from 'react';

import Taskbar from "../components/Taskbar";
import ListBox from '../components/ListBox';
import '../styles/Dashboard.css'
import '../styles/Basics.css'
import { useLayoutEffect } from 'react';

function Dashboard() {

    useLayoutEffect(() => {
            
    }, []);


    return (
        <div>
            <Taskbar />
            <div className='Background'>
                <h1 className='Page-title'> My Dashboard</h1>
                <div id='boxes-items'>
                    <div  className="Box-list" id="left-items">
                        <ListBox title="Music" type='music'>
                            list
                        </ListBox>
                        <ListBox title="Tiers" type='tier'>
                            list
                        </ListBox>
                    </div>
                    <div className="Box-list" id="right-items">
                        <ListBox title="Friends" type='friend'>
                            list
                        </ListBox>
                        <ListBox title="Clubs" type='club'>
                            list
                        </ListBox>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;