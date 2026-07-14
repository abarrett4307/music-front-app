async function createAlbum(artistid:string,albumname:string,cover:string) {
    const response = await fetch('/music-front-app/api/add/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        artist: artistid,
        album: albumname,
        cover: cover
      }), 
    }).then(response => response.json());
    
    if (await response.status != '0') {
        alert('error creating album');
    }
    return await response.status;
}

export default createAlbum;