
async function fetchSongs(username:string) {
    const response = await fetch(`/music-front-app/profile/api/${username}/songs`, {
            method: 'GET',
        }).then(response => response.json())
        
    return await response.songs;
}

export default fetchSongs;