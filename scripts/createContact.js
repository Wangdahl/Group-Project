import { getUsers, getImages} from './API.js';

document.addEventListener('DOMContentLoaded', () => {
    const parentDiv = document.getElementById('user-box');
    
    getUsers().then(users => {
        users.forEach(user => {
            const newDiv = document.createElement('div');
            const newDiv2 = document.createElement('div');
            const newDiv3 = document.createElement('div');
            const newH3 = document.createElement('h3');
            const newH4 = document.createElement('h4');
            const newP = document.createElement('p');
            const newButton = document.createElement('button');
            const newDiv4 = document.createElement('div');
            const newUl = document.createElement('ul');
            const newLi1 = document.createElement('li');
            const newLi2 = document.createElement('li');
            const newLi3 = document.createElement('li');
            const newImg = document.createElement('img');

            //Assigning classes to the elements
            newDiv.classList.add('contact-card');
            newDiv2.classList.add('profile');
            newDiv3.classList.add('details');
            newDiv4.classList.add('address-box');
            newDiv4.classList.add('hide');
            newImg.classList.add('profile-pic');
            newButton.classList.add('address-button');

            //Assigning info from api to elements.
            newH3.textContent = user.name;
            newH4.textContent = `@${user.username}`;
            newP.textContent = user.email;
            newButton.textContent = 'Show address';
            newLi1.textContent = user.address.city;
            newLi2.textContent = user.phone;
            newLi3.textContent = user.company.name;

            //Adding event listener to button for show/hide logic
            newButton.addEventListener('click', () => {
                newDiv4.classList.toggle('open');
            });

            //PLACEHOLDER IMG 
            newImg.src = '../images/profile-placeholder.jpg'
            //Adding elements to details div
            newDiv3.appendChild(newH3);
            newDiv3.appendChild(newH4);
            newDiv3.appendChild(newP);
            //Adding elements to profile div
            newDiv2.appendChild(newImg);
            newDiv2.appendChild(newDiv3);
            //Adding list items to list
            newUl.appendChild(newLi1);
            newUl.appendChild(newLi2);
            newUl.appendChild(newLi3);
            //Adding list to div4
            newDiv4.appendChild(newUl);
            //Adding elements to contact card (base div)
            newDiv.appendChild(newDiv2);
            newDiv.appendChild(newButton);
            newDiv.appendChild(newDiv4);
            //Adding the div containing all contents to the section
            parentDiv.appendChild(newDiv);
            
            
            //Fetching image for profile pic 
            //getImages().then(image => {
                //newImg.src = image.urls.small;;

            //}).catch(error => {
            //    console.error('Image fetch failed: ', error);
            //});
        })
    }).catch(error => {
        console.error('User fetch failed: ', error);
    });
});