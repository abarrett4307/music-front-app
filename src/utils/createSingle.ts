async function createSingle(song_name:string,inputduration:string,image:string) {
    var duration:number = parseInt(inputduration);
    const response = await fetch('/music-front-app/api/add/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        song_name: song_name,
        duration: duration,
        image_link: image
      }), 
    }).then(response => response.json());
    
    if (await response.status != '0') {
        alert('error creating song');
    }
    return await response.status;
}

export default createSingle;