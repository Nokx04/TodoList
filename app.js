document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    // Créer le span pour le texte de la tâche
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task-text';
    
    // Créer le bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.className = 'delete-btn';
    
    // Événement pour marquer la tâche comme complétée
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    
    // Événement pour supprimer la tâche
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });
    
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}

// Permettre d'ajouter une tâche avec la touche Entrée
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});