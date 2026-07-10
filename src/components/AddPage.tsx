import { useState,ChangeEvent } from 'react';
import '../styles/PopUp.css'
import '../styles/Basics.css'

interface Pageprops {
    type:string
}

function AddPage(props:Pageprops) {
    const [songName,setSongName] = useState('');

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setSongName(event.target.value);
      };
    return (
        <div id='Popup-Content'>
            <div id='search-div'>
                <input placeholder={`Search for ${props.type}`} className='Search-box' onChange={handleChangeName}></input>
                <button>Submit</button>
            </div>
            <p>{songName}</p>
        </div>
    );
}

export default AddPage;