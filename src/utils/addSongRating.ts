
async function addSongRating(inputscore:string,description:string,songid:string,username:string) {
    var score:number = parseInt(inputscore);
    if (score > 100 || score < 0) {
        alert('error with inputted score');
        return -1;
    }
    const response = await fetch('/music-front-app/api/rate/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        score: score,
        description: description,
        songid: songid,
        username: username }), 
    }).then(response => response.json())
    
    if (await response.status != '0') {
        alert('error creating rating');
    }
    return await response.status;
}

export default addSongRating;