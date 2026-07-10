
async function fetchFriends(username:string) {
    const response = await fetch(`/music-front-app/profile/api/${username}/friends`, {
            method: 'GET',
        }).then(response => response.json())
        
    return await response.friends;
}

export default fetchFriends;