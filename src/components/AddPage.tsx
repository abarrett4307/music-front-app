import { useState,ChangeEvent } from 'react';
import '../styles/PopUp.css'
import '../styles/Basics.css'
import SearchList from './SearchList';
import { useNavigate } from 'react-router-dom';

interface Pageprops {
    type:string
}

function AddPage(props:Pageprops) {
    const [results,setResults] = useState([]);
    const navigate = useNavigate();

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        search(event.target.value);
    };

    function navigateSelection(value:string): void {
        navigate(`/${props.type}/${value}`);
    }

    const handleSubmit = () => {
        if(props.type == 'song') {
            navigate('/song/1');
        }
        else if(props.type == 'profile') {
            navigate('/profile');
        }
        else {
            navigate('/dashboard');
        }
    };

    const search = (input:string) => {
        if (input === '') {
            return;
        }
        fetch(`/music-front-app/api/search/${props.type}s/${input}`, {
            method: 'GET',
        }).then(response => response.json()).then((response) => {(response)? setResults(response) : setResults([])});
    }

    return (
        <div id='Popup-Content'>
            <div id='search-div'>
                <input placeholder={`Search for ${props.type}`} id='search-box' className='Inputbox' onChange={handleChangeName}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <SearchList results={results} passUp={(value:string) => { navigateSelection(value); return {}; }}/>
        </div>
    );
}

export default AddPage;