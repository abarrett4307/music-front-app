import { ChangeEvent } from 'react';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import createSingle from '../utils/createSingle';

function CreateSong() {
    var songName:string;
    var duration:string;
    var image:string;

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        songName = event.target.value;
      };
      const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
        duration = (event.target.value);
      };
      const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        image = (event.target.value);
      };

    function submitArtist() {
        createSingle(songName,duration,image);
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
                    <button className='basic-button' onClick={submitArtist}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateSong;