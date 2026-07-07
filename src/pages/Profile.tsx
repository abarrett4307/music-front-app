import React from 'react';
import Taskbar from '../components/Taskbar';
import Itemlist from '../components/Itemlist';
import "../styles/Basics.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

function Profile() {
    let params = useParams();
    var user = getUser();
    let navigate = useNavigate();

    function getUser() {
        console.log(params);
        console.log(params.id);
        if (params.id == undefined) {
            //set to browser cached signed in ID
            var name = localStorage.getItem('user');
            if (!name) {
                alert('login');
                return "";
            }
            else {
                return name;       
            }
        }
        else {
            alert('und');
            return params.id;
        }
    }

    async function getProfileInformation(username : string) {
        const response = await fetch('/music-front-app/profile/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: {username}}), 
        }).then(response => response.json());
    }

    
//set data to fetch and display from server
    return (
        <div>
            <Taskbar />
            <div className="Background">
                <text className='Page-title'> {user}'s' Profile </text>
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