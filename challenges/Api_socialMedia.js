const baseURL = "https://randomuser.me/api/?results=5"
// user async/await
// display five user

async function getUsers(){
    await fetch(baseURL).then((res)=> res.json())
    .then((json) => {
        const freinds = json.results;
        const timeline = document.querySelector("#timeline");
        
        freinds.forEach(user => {
            let userImage = document.createElement('img');
            userImage.src = user.picture.medium;
            timeline.appendChild(userImage);

        });
        console.log(freinds)
        console.log(json.results[0].name)
    })
    
}

getUsers()

