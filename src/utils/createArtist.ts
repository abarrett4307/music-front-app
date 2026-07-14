async function createArtist(name:string,picture:string) {
    const response = await fetch('/music-front-app/api/add/artist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name: name,
        picture: picture
      }), 
    }).then(response => response.json());
    
    if (await response.status != '0') {
        alert('error creating artist');
    }
    return await response.status;
}

export default createArtist;