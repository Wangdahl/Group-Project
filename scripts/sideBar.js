import { getUsers } from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    //Getting user id from local storage to generate the right profile.

    //Parent container
    const sidebarUl = document.getElementById('sidebarUl');

    getUsers().then(users => {
        users.forEach(user => {
            // Storing ID in variable
            const userId = user.id;

            //Creating html elements
            const li = document.createElement('li');
            const img = document.createElement('img');
            const span = document.createElement('span');

            //Assigning classes
            li.classList.add('sidebar-li');
            img.classList.add('sidebar-pic');
            span.classList.add('sidebar-name');
            
            //Assigning content to elements
            //loading profile pic from local storage if exists otherwise placeholder
            const storedPic = localStorage.getItem(`img_${userId}`);
            if (storedPic) {
                img.src = storedPic;
            } else {
                img.src = '../images/profile-placeholder.jpg';
            }
            span.textContent = user.name;
            
            //Assigning eventlistener to li (turn it into a "button")
            li.addEventListener('click', () => {
                localStorage.setItem('id', userId);
                window.location.href = '../pages/profile.html';
            })

            //Appending..
            li.appendChild(img);
            li.appendChild(span);
            sidebarUl.appendChild(li);
        });
    });
});
