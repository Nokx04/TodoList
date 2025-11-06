
function filterTodosActive(taskList, query) {
    taskList.forEach(task => {
        if(task.completed){
            task.element.style.display = 'none';
        }
    });
    return taskList;
}

function filterTodosCompleted(taskList, query) {
    taskList.forEach(task => {
        if(task.completed){
            task.element.style.display = 'block';
        } else {
            task.element.style.display = 'none';
        }
    });
    return taskList;
}

function filterTodosAll(taskList, query) {
    taskList.forEach(task => {
        task.element.style.display = 'block';
    });
}

