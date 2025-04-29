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
const toDosContainer = document.getElementById('todo-container');
function renderPosts() {
	const container = document.getElementById("posts-section");
	const userId = Number(localStorage.getItem("id"));
	const posts = getpost().then((posts) => {
		toDosContainer.innerHTML = '';
		container.innerHTML = "";
		const results = posts.filter((post) => post.userId === userId);
		results.forEach((post) => {
			const block = document.createElement("div");
			block.id = "postsId";
			block.innerHTML = `<div class="posts-div">${post.body}</div>`;
			const commentBtn = document.createElement("button");
			commentBtn.id = "commentBtn";
			commentBtn.innerHTML = "&#8595; show Comments &#8595;";
			commentBtn.addEventListener("click", async () => {
				// Store the post ID
				localStorage.setItem("postId", post.id);

				// Check if comments container already exists
				let commentsContainer = document.getElementById(`comments-${post.id}`);

				// If container exists, toggle visibility and button text
				if (commentsContainer) {
					commentsContainer.remove();
					commentBtn.innerHTML = "&#8595; Show Comments &#8595;";
					return;
				}

				try {
					const { getComments } = await import("./comment.js");
					const comments = await getComments(post.id);

					// Create new comments container
					commentsContainer = document.createElement("div");
					commentsContainer.id = `comments-${post.id}`;
					block.appendChild(commentsContainer);

					// Change button text to Hide Comments
					commentBtn.innerHTML = "&#8593; Hide Comments &#8593;";

					// Display first 3 comments
					const firstThreeComments = comments.slice(0, 3);
					firstThreeComments.forEach((comment) => {
						const commentElement = document.createElement("div");
						commentElement.className = "comment";
						commentElement.innerHTML = `
    <b>${comment.email}</b>
    <p id="commentBody">${comment.body}</p>
`;
						commentsContainer.appendChild(commentElement);
					});
				} catch (error) {
					console.error("Error loading comments:", error);
				}
			});
			container.appendChild(block);
			block.appendChild(commentBtn);
		});
	});
}
