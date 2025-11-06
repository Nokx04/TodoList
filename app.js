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
    }
}