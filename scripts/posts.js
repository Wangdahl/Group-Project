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
    const container = document.getElementById("posts-section")
    const userId = Number(localStorage.getItem('id'))
    console.log(typeof userId)
    console.log(container)
    const posts = getpost().then((posts) => {
        const results = posts.filter((post) => post.userId === userId);
        console.log(results)
        posts.forEach(post => {
            const block = document.createElement("div")
            block.innerHTML = `<div class="posts-div">${post.title}</div>`
            container.appendChild(block)
        });
    });
    console.log(posts)
};
