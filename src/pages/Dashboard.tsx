import Taskbar from "../components/Taskbar";
import ListBox from '../components/ListBox';
import PopUp from '../components/PopUp';
import '../styles/Dashboard.css'
import '../styles/Basics.css'
import fetchSongs from '../utils/fetchSongs';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFriends from "../utils/fetchFriends";

function Dashboard() {
    const [songItems,setSongItems] = useState('');
    const [friendItems,setFriendItems] = useState('');
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
        let friends = await fetchFriends(username);
        setFriendItems(friends.map((friend: any) => <li>{JSON.stringify(friend)}</li>));
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
                        <ListBox title="Music" type='song'>
                            <PopUp data={{buttonText: 'Add Song Rating',type:"music"}}   />
                            <ul className="Item-list">{songItems}</ul>
                        </ListBox>
                        <ListBox title="Tiers" type='tier'>
                            list
                        </ListBox>
                    </div>
                    <div className="Box-list" id="right-items">
                        <ListBox title="Friends" type='friend'>
                            <PopUp data={{buttonText: 'Add Friend',type:"friend"}}   />
                            <ul className="Item-list">{friendItems}</ul>
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