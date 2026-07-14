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

    const handleSubmit = () => {
        if(props.type == 'song') {
            navigate('/song/1');
        }
        if(props.type == 'friend') {
            navigate('/song/1');
        }
    };

    return (
        <div id='Popup-Content'>
            <div id='search-div'>
                <input placeholder={`Search for ${props.type}`} id='search-box' className='Inputbox' onChange={handleChangeName}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <p>{songName}</p>
        </div>
    );
}

export default AddPage;