import Taskbar from "../components/Taskbar";
import ListBox from '../components/ListBox';
import PopUp from '../components/PopUp';
import '../styles/Dashboard.css'
import '../styles/Basics.css'
import fetchSongs from '../utils/fetchSongs';
import { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        setSongItems(songs.map((song: any) => <li><Link style={{ color: "black"}} to={`/song/${song.song_id}`}>{JSON.stringify(song)}</Link></li>));
        let friends = await fetchFriends(username);
        setFriendItems(friends.map((friend: any) => <li><Link style={{ color: "black"}} to={`/profile/${(friend.usernameone == user) ? friend.usernametwo : friend.usernameone}`}>{(friend.usernameone == user) ? friend.usernametwo : friend.usernameone}</Link></li>));
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
                            <PopUp data={{buttonText: 'Add Song Rating',type:"song"}}   />
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
                <div id='bottom-text'>
                    <p>
                        <Link to="/contribute" className="RedirectButton" id="contribute-link">Add a new song to The Music Nest</Link>
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;