import { ChangeEvent,useState, useSyncExternalStore } from 'react';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import createSingle from '../utils/createSingle';
import SearchList from '../components/SearchList';
import { useNavigate } from 'react-router-dom';
import createAlbum from '../utils/createAlbum';

function CreateAlbum() {
    const [songName,setSongName] = useState('');
    const [albumName,setAlbumName] = useState('');
    const [duration,setDuration] = useState('');
    const [image,setImage] = useState('');
    const [results,setResults] = useState([]);
    const [selected,setSelected] = useState('');
    const [songList,setSongList] = useState<{ song_name: string, duration: string }[]>([]);
    const navigate = useNavigate();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setAlbumName(event.target.value);
    };
    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };
    const handleChangeArtist = (event: ChangeEvent<HTMLInputElement>) => {
        searchArtists(event.target.value);
    }; 
    const handleChangeSongName = (event: ChangeEvent<HTMLInputElement>) => {
        setSongName(event.target.value);
    };
    const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
        setDuration(event.target.value);
    };

    function addSong() {
        setSongList(songList.concat([{ song_name: songName, duration: duration }]));
    }

    async function submitAlbum() {
        
        const result = await createAlbum(selected,albumName,image,songList);
        if (result == '0') {
            navigate('/dashboard');
        }
        
    }

    const searchArtists = (input:string) => {
        if (input === '') {
            return;
        }
        fetch(`/music-front-app/api/search/artists/${input}`, {
            method: 'GET',
        }).then(response => response.json()).then((response) => {(response)? setResults(response) : setResults([])});
    }

    return (
        <div>  
            <Taskbar />
            <div className='Background'>
                <div className='Centered' id='navigator-div'>
                    <h1 className='Page-title' id='contribute-title'>Contribute to The Music Nest</h1>
                    <h2>Add a new Single Song</h2>
                    <input placeholder='Album Name' className='Inputbox' onChange={handleChangeName}></input>
                    <input placeholder='Link to Cover Picture' className='Inputbox' onChange={handleChangeImage}></input>               
                    <input placeholder='Artist Name' className='Inputbox' onChange={handleChangeArtist}></input>
                    <SearchList results={results} passUp={(value: string) => { setSelected(value); return {}; }}/>
                        <div className='Row-div' style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        gap:10,
                        margin:20}}>
                            <input placeholder='Song Name' className='Inputbox' onChange={handleChangeSongName}></input>
                            <input placeholder='Duration' className='Inputbox' onChange={handleChangeDuration}></input>
                            <button className='basic-button' onClick={addSong}>Add Song</button>
                        </div>
                    <button className='basic-button' onClick={submitAlbum} style={{ 
                        display: 'flex', 
                        margin:50}}>Submit Album</button>

                        <p>Songs</p>
                        <div style={{ border: '1px solid black', borderRadius: '6px', margin:10, marginTop:0,paddingRight:20 }}>   
                            <ol>{songList.map(song => <li>{song.song_name} : {song.duration} seconds</li>)}</ol>
                        </div>
                        
                            <button className='basic-button' onClick={()=>{setSongList([])}}>Reset Song List</button>
                </div>
            </div>
        </div>
    );
}

export default CreateAlbum;