import { useParams,useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import Taskbar from "../components/Taskbar";
import emptyPicture from '../assets/empty.jpg'
import RatePopUp from "../components/RatePopUp";

import '../styles/Basics.css'

function Album() {

    interface albumResponse {
        album_id:string,
        album_name:string,
        artist_name:string,
        cover:string
    }

    const params = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState<albumResponse>();
    const [id, setId] = useState('0');

    async function getAlbum() {
        const response = await fetch(`/music-front-app/api/album/${params.id}`, {
            method: 'GET',
        }).then(response => response.json());
        const fetchedAlbum = response.data?.[0];
        setAlbum(fetchedAlbum);
        setId(String(fetchedAlbum?.album_id ?? '0'));
    }

    useLayoutEffect(() => {
        if (params.id === undefined) {
            alert('no album found');
            navigate('/dashboard');
            return;
        }
        getAlbum();
    }, [params.id, navigate]);

    return (
        <div>
            <Taskbar />
            <div className="Background">
                <div id="Song-contents" className="Row-div">
                    <div className="Cover-box">
                        <img src={album?.cover ?? emptyPicture} id="Img-logo" alt={`album cover for ${album?.album_name ?? 'unknown'}`} />
                    </div>
                    <div>
                        <h1>{String(album?.album_name ?? '')}</h1>
                        <h2>{String(album?.artist_name ?? '')}</h2>
                    </div>
                </div>
                    {/*<p> {JSON.stringify(song)}</p>*/}
                <RatePopUp type='album' id={id} />
            </div>
        </div>
    );
}

export default Album;
