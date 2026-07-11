import { useState,ChangeEvent } from 'react';
import '../styles/PopUp.css'
import '../styles/Basics.css'
import { useNavigate } from 'react-router-dom';

interface Pageprops {
    type:string
}

function AddPage(props:Pageprops) {
    const [songName,setSongName] = useState('');
    const navigate = useNavigate();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setSongName(event.target.value);
      };

    return (
        <div id='Popup-Content'>
            <div id='search-div'>
                <input placeholder={`Search for ${props.type}`} id='search-box' className='Inputbox' onChange={handleChangeName}></input>
                <button onClick={() => {navigate('/song/1')}}>Submit</button>
            </div>
            <p>{songName}</p>
        </div>
    );
}

export default AddPage;