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
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';

        // deleteTask
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-xmark';
        deleteButton.appendChild(icon);
        deleteButton.className = 'delete-btn';
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

// Événement pour marquer la tâche comme complétée
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    
    listItem.appendChild(taskSpan);


// Permettre d'ajouter une tâche avec la touche Entrée
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});
