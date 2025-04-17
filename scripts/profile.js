import { getUsers } from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    //Getting user id from local storage to generate the right profile.
    const userId = localStorage.getItem('id');
    const profileContainer = document.getElementById('profile-header');
    
    //Checking that user id exists
    if (!userId) {
        console.error('No ID found in localStorage.');
        profileContainer.textContent = 'Hittade inget användar id. Välj kontakt i menyn till vänster.'
        return
    }

    getUsers().then(users => {
        const user = users.find(u => u.id === Number(userId));

        //Checking that a user with a coresponding id exists.
        if(!user) {
            profileContainer.textContent = 'Hittade ingen användare med detta id.'
        }
        
        //Creating elements
        const profilePic = document.createElement('img');
        const userInfo = document.createElement('div');
        const name = document.createElement('h1');
        const userName = document.createElement('h2');
        
        //Assigning classes
        profilePic.classList.add('big-profile-pic');
        name.classList.add('profile-h1');
        userName.classList.add('profile-h2');

        //Assigning content to elements
        profilePic.src = '../images/profile-placeholder.jpg';
        name.textContent = user.name;
        userName.textContent = `@${user.username}`;

        //Appending elements
        userInfo.appendChild(name);
        userInfo.appendChild(userName);

        profileContainer.appendChild(profilePic);
        profileContainer.appendChild(userInfo);
    })
});

