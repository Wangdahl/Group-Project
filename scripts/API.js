

//Getting users from jsonplaceholder
async function getUsers () {
    // Url to fetch
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(url);
        //If response is not ok throw error
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        //Return json object
        return json;
    } catch(error) {
        console.error(error.message);
    }
}

// Getting images from unsplash
async function getImages(query = 'face') {
    // API_KEY from env.js (.gitignore´d)
    const accessKey = API_KEY;
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error.message);
    }
}