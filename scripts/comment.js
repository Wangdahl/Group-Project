async function getComment() {
	const url = "https://jsonplaceholder.typicode.com/comments";

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

//get comments for post id === 4 (change for post.id)
getComment().then((comments) => {
	const filteredComments = comments.filter((comment) => comment.postId === 4);
	filteredComments.forEach((comment) => {
		console.log(comment);
	});
});
