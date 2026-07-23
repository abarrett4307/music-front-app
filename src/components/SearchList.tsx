import { useState, MouseEvent } from 'react';
import '../styles/SearchList.css'

interface ListProps {
    results: {artist_id?:string,artist_name?:string,song_name?:string,song_id?:string, username?:string}[],
    passUp: (value:string)=>{}
}


function SearchList(props:ListProps) {
    const [selected,setSelected] = useState('aba');

    function handleSelect(event: MouseEvent<HTMLDivElement>) {
            event.currentTarget.classList.toggle('selected');
            const oldSelected = document.getElementById(selected);
            oldSelected?.classList.toggle('selected');
            setSelected(event.currentTarget.getAttribute('id') ?? '');
            props.passUp(event.currentTarget.getAttribute('id') ?? '');
    }




    return (
        <div className="Search-list">
            {props.results.map((result,id) => (
                <div key={id} id={result.artist_id ?? result.song_id ?? result.username} onClick={handleSelect} className='List-item'>{result.artist_name ?? result.song_name ?? result.username}</div>
            ))}
        </div>
    );
}


export default SearchList;
