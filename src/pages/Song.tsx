import { useNavigate, useParams, Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Taskbar from "../components/Taskbar";
import RatePopUp from "../components/RatePopUp";
import "../styles/Basics.css"
import "../styles/Song.css"
import emptyPicture from '../assets/empty.jpg'

function Song() {

    interface songResponse {
        song_name:string,
        album_name:string,
        artist_name:string,
        duration:number,
        cover:string,
        song_id:string,
        album_id:string
    }

    const params = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState<songResponse>();
    const [id, setId] = useState('0');

    async function getSong() {
        const response = await fetch(`/music-front-app/api/song/${params.id}`, {
            method: 'GET',
        }).then(response => response.json());
        const fetchedSong = response.data?.[0];
        setSong(fetchedSong);
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



    return(
        <div>
            <Taskbar />
            <div className="Background">
                <div id="Song-contents" className="Row-div">
                    <div className="Cover-box">
                        <img src={song?.cover ?? emptyPicture} id="Img-logo" alt={`album cover for ${song?.album_name ?? 'unknown'}`} />
                    </div>
                    <div>
                        <h1>{String(song?.song_name ?? '')}</h1>
                        <Link style={{color:'black'}} to={`/album/${song?.album_id ?? ''}`}><h2>{String(song?.album_name ?? '')}</h2></Link>
                        <h2>{String(song?.artist_name ?? '')}</h2>
                    </div>
                </div>
                    {/*<p> {JSON.stringify(song)}</p>*/}
                <RatePopUp type='song' id={id} />
            </div>
        </div>
    );
}


export default Song;