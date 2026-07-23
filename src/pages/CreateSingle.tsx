import { ChangeEvent,useState, useSyncExternalStore } from 'react';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import createSingle from '../utils/createSingle';
import SearchList from '../components/SearchList';
import { useNavigate } from 'react-router-dom';

function CreateSingle() {
    const [songName,setSongName] = useState('');
    const [duration,setDuration] = useState('');
    const [image,setImage] = useState('');
    const [results,setResults] = useState([]);
    const [selected,setSelected] = useState('');
    const navigate = useNavigate();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setSongName(event.target.value);
    };
    const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
        setDuration(event.target.value);
    };
    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };
    const handleChangeArtist = (event: ChangeEvent<HTMLInputElement>) => {
        searchArtists(event.target.value);
    };

    async function submitArtist() {
        const result = await createSingle(songName,duration,image,selected);
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
                    <input placeholder='Song Name' className='Inputbox' onChange={handleChangeName}></input>
                    <input placeholder='Link to Cover Picture' className='Inputbox' onChange={handleChangeImage}></input>                    
                    <input placeholder='Duration in seconds' className='Inputbox' onChange={handleChangeDuration}></input>             
                    <input placeholder='Artist Name' className='Inputbox' onChange={handleChangeArtist}></input>
                    <SearchList results={results} passUp={(value: string) => { setSelected(value); return {}; }}/>
                    <button className='basic-button' onClick={submitArtist}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateSingle;