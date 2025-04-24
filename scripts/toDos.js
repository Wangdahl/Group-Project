


let toDoArray = [];
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data =>{ toDoArray = data})
.catch(error => console.error('Error', error));

const toDosContainer = document.querySelector('.todo-container');
const profileName = document.querySelector('.profile-name');
const toDoElement = document.querySelector('.to-do');
function clickedUser(users){
    toDoArray.forEach(toDosData => {
        if(toDosData.userId == users.id){
            console.log(users.id);
            toDosContainer.innerHTML = '';

            toDoElement.addEventListener('click',()=>{
                const content = document.createElement('div');
                const title = document.createElement('h1');
                const completed = document.createElement('p');
                title.classList.add('title');
                completed.classList.add('completed');
                title.textContent = toDosData.title;
                if(toDosData.completed == false){
                    completed.textContent = '❌';
                }
                else{
                    completed.textContent = '✅'
                }
                toDosContainer.appendChild(content);
                content.appendChild(title);
                content.appendChild(completed);
            })
        };
    });
};










// import { getUsers } from "./API.js";
// let toDoArray = [];

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data =>{ toDoArray = data})
// .catch(error => console.error('Error', error));

// const toDosContainer = document.createElement('div');
// toDosContainer.classList.add('todo-container');
// const profileName = document.querySelector('.profile-name');
// const toDoElement = document.querySelector('.to-do-btn');

// getUsers().then(users =>{
//     console.log(users);
//     console.log(users.id);
// })

// toDoArray.forEach(toDosData => {
//     if(toDosData.userId == users.id){
//         console.log(toDosData.title);
//         toDosContainer.innerHTML = '';
//         toDoElement.addEventListener('click',()=>{
//             const content = document.createElement('div');
//             const title = document.createElement('h1');
//             const completed = document.createElement('p');
//             title.classList.add('title');
//             completed.classList.add('completed');
//             title.textContent = toDosData.title;
//             if(toDosData.completed == false){
//                 completed.textContent = '❌';
//             }
//             else{
//                 completed.textContent = '✅'
//             }
//             toDosContainer.appendChild(content);
//             content.appendChild(title);
//             content.appendChild(completed);
//         })
//     };
// });


