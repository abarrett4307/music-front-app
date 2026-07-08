import React from 'react';
import Taskbar from '../components/Taskbar';
import ListBox from '../components/ListBox';
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
            return params.id;
        }
    }

    useLayoutEffect(() => {
        getProfileInformation(user);
    }, []);

    async function getProfileInformation(username : string) {
        const response = await fetch(`/music-front-app/profile/api/${username}/songs`, {
            method: 'GET',
        }).then(response => response.json());
        alert(response);
    }

    
//set data to fetch and display from server
    return (
        <div>
            <Taskbar />
            <div className="Background">
                <text className='Page-title'> {user}'s  Profile </text>
                <div id='boxes-items'>
                    <div  className="Box-list" id="left-items">
                        <ListBox title="Music" type="music">
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


export default Profile;