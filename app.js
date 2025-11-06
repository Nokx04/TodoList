const addTaskButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.querySelector('#taskList');
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        listItem.textContent = taskText;

        // deleteTask
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-xmark';
        deleteButton.appendChild(icon);
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });