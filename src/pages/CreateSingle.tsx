import { ChangeEvent,useState } from 'react';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import createSingle from '../utils/createSingle';
import SearchList from '../components/SearchList';

function CreateSingle() {
    var songName:string;
    var duration:string;
    var image:string;
    const [artist,setArtist] = useState('');
    const [results,setResults] = useState([]);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        songName = event.target.value;
    };
    const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
        duration = (event.target.value);
    };
    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        image = (event.target.value);
    };
    const handleChangeArtist = (event: ChangeEvent<HTMLInputElement>) => {
        setArtist(event.target.value);
        searchArtists(event.target.value);
    };

    function submitArtist() {
        createSingle(songName,duration,image);
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
                    <input placeholder='Link to Cover Picture' className='Inputbox' onChange={handleChangeDuration}></input>                    
                    <input placeholder='Duration in seconds' className='Inputbox' onChange={handleChangeImage}></input>             
                    <input placeholder='Artist Name' className='Inputbox' onChange={handleChangeArtist}></input>
                    <SearchList results={results}/>
                    <button className='basic-button' onClick={submitArtist}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateSingle;