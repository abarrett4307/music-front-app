import React from 'react';
import Taskbar from '../components/Taskbar';
import Itemlist from '../components/Itemlist';
import "../styles/Basics.css";
import { useParams } from 'react-router-dom';

function Profile() {
    let { profid } = useParams();
    if (profid == "") {
//set to browser cached signed in ID
        profid = '1'; 
    }

    async function getProfileInformation(id : number) {
        const response = await fetch('/music-front-app/profile/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: {id}}), 
        }).then(response => response.json());
    }

    
//set data to fetch and display from server
    return (
        <div>
            <Taskbar />
            <div className="Background">
                <text className='Page-title'> usernames Profile</text>
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


export default Profile;