export async function getComments(postId) {
	const url = "https://jsonplaceholder.typicode.com/comments";

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const comments = await response.json();
		// Filter comments by postId
		const filteredComments = comments.filter(
			(comment) => comment.postId === postId
		);
		return filteredComments;
	} catch (error) {
		console.error(error.message);
		return [];
	}
}

// Example usage:
/* 
getComments(1).then(comments => {
    comments.forEach(comment => {
        console.log(`
            Post ID: ${comment.postId}
            Comment ID: ${comment.id}
            Name: ${comment.name}
            Email: ${comment.email}
            Body: ${comment.body}
        `);
    });
}); 
*/
