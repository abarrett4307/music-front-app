async function createSong(albumid:string,song_name:string,inputduration:string) {
    var duration:number = parseInt(inputduration);
    const response = await fetch('/music-front-app/api/add/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        album: albumid,
        song_name: song_name,
        duration: duration
      }), 
    }).then(response => response.json());
    
    if (await response.status != '0') {
        alert('error creating song');
    }
    return await response.status;
}

export default createSong;