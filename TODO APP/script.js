const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;

    const li = document.createElement('li');
    li.innerText = value;

    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    li.appendChild(delButton);

    delButton.addEventListener('click', ()=>{
        li.remove();
    })

    todoItemContainer.appendChild(li);
    todoInput.value = ''
});