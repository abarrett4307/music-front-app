
async function addAlbumRating(inputscore:string,description:string,albumid:string,username:string) {
    var score:number = parseInt(inputscore);
    if (score > 100 || score < 0) {
        alert('error with inputted score');
        return -1;
    }
    const response = await fetch('/music-front-app/api/rate/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        score: score,
        description: description,
        albumid: albumid,
        username: username }), 
    }).then(response => response.json())
    
    if (await response.status != '0') {
        alert('error creating rating');
    }
    return await response.status;
}

export default addAlbumRating;