import { getUsers } from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    //Parent container
    const sidebar = document.getElementById('sidebar');
    const sidebarUl = document.getElementById('sidebarUl');

    getUsers().then(users => {
        users.forEach(user => {
            //Creating html elements
            const li = document.createElement('li');
            const img = document.createElement('img');
            const span = document.createElement('span');

            //Assigning classes
            li.classList.add('sidebar-li');
            img.classList.add('sidebar-pic');
            span.classList.add('sidebar-name');
            
            //Assigning content to elements
            img.src = '../images/profile-placeholder.jpg';
            span.textContent = user.name;

            // Storing ID in variable
            const userId = user.id;
            
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
