document.addEventListener('DOMContentLoaded', loadTasks);

const addTaskButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');

addTaskButton.addEventListener('click', addTask);


deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });


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

        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.querySelectorAll('#taskList li');
    const tasks = [];
    taskList.forEach(item => tasks.push(item.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.querySelector('#taskList');
    savedTasks.forEach(taskText => {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
    });
}

