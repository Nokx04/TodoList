const addTaskButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.querySelector('#taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';

        saveTasks();
    }
}


// ---------------------------
// 🔸 Partie ajoutée : LocalStorage
// ---------------------------

// Charger les tâches à l’ouverture de la page
document.addEventListener('DOMContentLoaded', loadTasks);

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