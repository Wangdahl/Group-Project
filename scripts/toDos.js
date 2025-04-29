
const usersId = localStorage.getItem('id');

let toDoArray = [];
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data =>{ toDoArray = data
    
})
.catch(error => console.error('Error', error));


const toDosContainer = document.getElementById('todo-container');
const toDoElement = document.getElementById('to-do-btn');
const postsElement = document.getElementById('posts-section');
toDoElement.addEventListener('click',()=>{
    postsElement.innerHTML = '';
    toDosContainer.innerHTML = '';
    toDoArray.forEach(toDosData => {
        if(toDosData.userId == Number(usersId)){
                const content = document.createElement('div');
                const title = document.createElement('p');
                const completed = document.createElement('p');
                content.id = 'todo-content';
                title.id = 'todo-title';
                completed.id = 'todo-task';
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
            }
        });
    });




