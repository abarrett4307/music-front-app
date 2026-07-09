import React from 'react';
import Taskbar from '../components/Taskbar';
import ListBox from '../components/ListBox';
import "../styles/Basics.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useLayoutEffect,useState } from 'react';
import fetchSongs from '../utils/fetchSongs';

function Profile() {
    let params = useParams();
    var user = getUser();
    let navigate = useNavigate();
    let songs = [];
    const [songItems, setSongItems] = useState('');



    function getUser() {
        if (params.id == undefined) {
            //set to browser cached signed in ID
            return localStorage.getItem('user');
        }
        else {
            return params.id;
        }
    }

    useLayoutEffect(() => {
        if (user == null) {
            alert('login to view your profile');
            navigate('/login');
        }
        else {
            getProfileInformation(user);
        }
    }, []);

    async function getProfileInformation(username : string) {
        let songs = await fetchSongs(username);
        setSongItems(songs.map((song: any) => <li>{JSON.stringify(song)}</li>));
    }

    
//set data to fetch and display from server
    return (
        <div>
            <Taskbar />
            <div className="Background">
                <p className='Page-title'> {user}'s  Profile </p>
                <div id='boxes-items'>
                    <div  className="Box-list" id="left-items">
                        <ListBox title="Music" type="music">
                            <ul>{songItems}</ul>
                        </ListBox>
                        <ListBox title="Tiers" type='tier'>
                            tiers
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