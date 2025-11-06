document.addEventListener('DOMContentLoaded', loadTasks);

const addTaskButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.querySelector('#taskList');
        const listItem = document.createElement('li');
        
        // Créer le span pour le texte de la tâche
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        // Événement pour marquer la tâche comme complétée
        taskSpan.addEventListener('click', function() {
            listItem.classList.toggle('completed');
            saveTasks();
        });
        
        // Créer le bouton de suppression
        const deleteButton = document.createElement('button');
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-xmark';
        deleteButton.appendChild(icon);
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            saveTasks();
        });
        
        listItem.appendChild(taskSpan);
        taskList.appendChild(listItem);
        taskInput.value = '';

        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.querySelectorAll('#taskList li');
    const tasks = [];
    taskList.forEach(item => {
        tasks.push({
            text: item.querySelector('.task-text').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.querySelector('#taskList');
    savedTasks.forEach(task => {
        const listItem = document.createElement('li');
        
        // Créer le span pour le texte
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text || task;
        taskSpan.className = 'task-text';
        
        // Marquer comme complétée si nécessaire
        if (task.completed) {
            listItem.classList.add('completed');
        }
        
        // Événement pour marquer la tâche comme complétée
        taskSpan.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        
        listItem.appendChild(taskSpan);
        taskList.appendChild(listItem);
    });
}

// Permettre d'ajouter une tâche avec la touche Entrée
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});