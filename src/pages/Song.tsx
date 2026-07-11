import { useNavigate, useParams } from "react-router-dom";
import Taskbar from "../components/Taskbar";
import "../styles/Basics.css"
import { useLayoutEffect, useState } from "react";
import RatePopUp from "../components/RatePopUp";

function Song() {

    interface songResponse {
        song_id:number,
        album_id:number,
        name:string,
        duration:number
    }

    const params = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState<songResponse>();
    const [id, setId] = useState('100');

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
                <p> {JSON.stringify(song)}</p>
                <RatePopUp id={id} />
            </div>
        </div>
    );
}


export default Song;