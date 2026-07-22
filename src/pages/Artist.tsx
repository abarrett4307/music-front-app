import { useParams, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Taskbar from "../components/Taskbar";
import "../styles/Basics.css"
import emptyPicture from '../assets/empty.jpg'
import '../styles/Song.css'


function Artist() {
    const params = useParams();

    interface artistResponse {
        artist_name:string,
        picture:string,
    }

    const navigate = useNavigate();
    const [artist, setArtist] = useState<artistResponse>();
    const [id, setId] = useState('0');

    async function getSong() {
        const response = await fetch(`/music-front-app/api/artist/${params.id}`, {
            method: 'GET',
        }).then(response => response.json());
        const fetchedSong = response.data?.[0];
        setArtist(fetchedSong);
        setId(String(fetchedSong?.song_id ?? '0'));
    }

    useLayoutEffect(() => {
        if (params.id === undefined) {
            alert('no song found');
            navigate('/dashboard');
            return;
        }
        getSong();
    }, [params.id, navigate]);
    
    return (
        <div>
            <Taskbar />
            <div className="Background">
                <div id="Song-contents" className="Row-div">
                    <div className="Cover-box">
                        <img src={artist?.picture ?? emptyPicture} className="Page-picture" alt={`album cover for ${artist?.artist_name ?? 'unknown'}`} />
                    </div>
                    <div>
                        <h1>{String(artist?.artist_name ?? '')}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist;