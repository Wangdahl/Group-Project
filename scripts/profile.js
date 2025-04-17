import { getUsers } from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    //Getting user id from local storage to generate the right profile.
    const userId = localStorage.getItem('id');
    const profileContainer = document.getElementById('profile-section');
    
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
        const name = document.createElement('h2');
        const userName = document.createElement('h3');
        const intro = document.createElement('p');
        
        //Assigning classes
        profilePic.classList.add('big-profile-pic');
        name.classList.add('profile-h2');
        userName.classList.add('profile-h3');
        intro.classList.add('introduction');

        //Assigning content to elements
        profilePic.src = '../images/profile-placeholder.jpg';
        name.textContent = user.name;
        userName.textContent = `@${user.username}`;
        intro.textContent = `I work at ${user.company.name}, where our motto is "${user.company.catchPhrase}". You can reach me at ${user.email} or give me a call at ${user.phone}. Check out our website at ${user.website}.`;

        //Appending elements
        userInfo.appendChild(name);
        userInfo.appendChild(userName);
        userInfo.appendChild(intro);
        profileContainer.appendChild(profilePic);
        profileContainer.appendChild(userInfo);
    });

    const profileH1 = document.getElementById('profile-h1');
    profileH1.addEventListener('click', () => {
        window.location.href = '../index.html';
    })
});

