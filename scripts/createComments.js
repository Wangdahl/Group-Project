// import { getComments } from "./comment.js";

// document.addEventListener("DOMContentLoaded", () => {
// 	const postId = Number(localStorage.getItem("postId"));
// 	if (!postId) {
// 		console.error("No post ID found");
// 		return;
// 	}

// 	getComments(postId).then((comments) => {
// 		const commentContainer = document.getElementById("comments-container");
// 		const firstThreeComments = comments.slice(0, 3);

// 		firstThreeComments.forEach((comment) => {
// 			const commentElement = document.createElement("div");
// 			commentElement.className = "comment";
// 			commentElement.innerHTML = `
//                 <b>${comment.email}:</b>
//                 <p id=commentBody>${comment.body}</p>
//             `;
// 			commentContainer.appendChild(commentElement);
// 		});
// 	});
// });
