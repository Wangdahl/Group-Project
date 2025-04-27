//fetch all posts from API
async function getpost() {
	const url = "https://jsonplaceholder.typicode.com/posts";

	try {
		const response = await fetch(url);
		//If response is not ok throw error
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const json = await response.json();
		//Return json object
		return json;
	} catch (error) {
		console.error(error.message);
	}
}

function renderPosts() {
    const container = document.getElementById("posts-section");
    const userId = Number(localStorage.getItem('id'));

    //if container already has posts, clear and return
    if(container.children.length > 0) {
        container.innerHTML = "";
        return;
    }
    //or fetch and render posts
    getpost()
        .then(posts => {
        //filter for users posts (max 10)
        const results = posts
        .filter(post => post.userId === userId)
        .slice(0, 10);

        //rendera only 10 posts
        results.forEach(post => {
            const block = document.createElement("div")
            block.innerHTML = `<div class="posts-div">${post.title}</div>`
            container.appendChild(block)
        });
    })
    .catch(err => {
        console.error("Fel vid rendering");
    });
}
