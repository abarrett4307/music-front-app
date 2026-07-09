import Taskbar from "../components/Taskbar";
import ListBox from '../components/ListBox';
import '../styles/Dashboard.css'
import '../styles/Basics.css'
import fetchSongs from '../utils/fetchSongs';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [songItems,setSongItems] = useState('');
    const user = localStorage.getItem('user');
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (user) {
            getProfileInformation(user);
        }
        else {
            alert('log in to view your dashboard');            
            navigate('/login');
        }
    }, []);

    async function getProfileInformation(username : string) {
        let songs = await fetchSongs(username);
        setSongItems(songs.map((song: any) => <li>{JSON.stringify(song)}</li>));
    }


    function loadForm() {
        alert('not yet implemented');
    }

    return (
        <div>
            <Taskbar />
            <div className='Background'>
                <p className='Page-title'> My Dashboard</p>
                <div id='boxes-items'>
                    <div  className="Box-list" id="left-items">
                        <ListBox title="Music" type='music'>
                            <button className='Add-button' onClick={loadForm}>Add Song Rating</button>
                            <ul>{songItems}</ul>
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