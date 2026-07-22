import { ChangeEvent } from 'react';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import createArtist from '../utils/createArtist';
import { useNavigate } from 'react-router-dom';

function CreateArtist() {
    var artistName:string;
    var imageLink:string;
    const navigate = useNavigate();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        artistName = event.target.value;
      };
      const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        imageLink = (event.target.value);
      };

    async function submitArtist() {
        const result = await createArtist(artistName,imageLink);
        if (result == '0') {
            navigate('/dashboard');
        }
    }

    return (
        <div>  
            <Taskbar />
            <div className='Background'>
                <div className='Centered' id='navigator-div'>
                    <h1 className='Page-title' id='contribute-title'>Contribute to The Music Nest</h1>
                    <h2>Add a new Artist</h2>
                    <input placeholder='Artist Name' className='Inputbox' onChange={handleChangeName}></input>
                    <input placeholder='Link to Artist Picture' className='Inputbox' onChange={handleChangeImage}></input>
                    <button className='basic-button' onClick={submitArtist}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateArtist;