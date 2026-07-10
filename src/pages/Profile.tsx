import Taskbar from '../components/Taskbar';
import ListBox from '../components/ListBox';
import "../styles/Basics.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useLayoutEffect,useState } from 'react';
import fetchSongs from '../utils/fetchSongs';
import fetchFriends from '../utils/fetchFriends';

function Profile() {
    let params = useParams();
    const user = getUser();
    const navigate = useNavigate();
    let songs = [];
    const [songItems, setSongItems] = useState('');
    const [friendItems,setFriendItems] = useState('');



    function getUser() {
        if (params.id == undefined) {
            //set to browser cached signed in ID
            return localStorage.getItem('user');
        }
        else {
            return params.id;
        }
    }

    async function getProfileInformation(username : string) {
        let songs = await fetchSongs(username);
        setSongItems(songs.map((song: any) => <li>{JSON.stringify(song)}</li>));
        let friends = await fetchFriends(username);
        setFriendItems(friends.map((friend: any) => <li>{JSON.stringify(friend)}</li>));
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
                            <ul>{friendItems}</ul>
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