var arrTasks = [];
var taskValue = document.getElementById("task-value");
var container = document.getElementById('container');

function addTask() {
    arrTasks.push({name: taskValue.value, date: new Date(), checked: false});
    taskValue.value = '';
    renderAllTasks();
}

function renderTasks(item, index) {
    return '<hr><div>Название задачи:</div>' + item.name + '<div>Дата создания задачи:</div>' + item.date +
        '<button onclick="deleteTasks(' + index + ')">Удалить</button>' + '<br><input disabled type="checkbox" ' +
        (item.checked ? 'checked' : '') + '>' +
        '<button onclick="executeTask(' + index + ')">Выполнить</button>';
}

function renderAllTasks() {
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
    container.innerHTML = arrTasks.map(renderTasks).join('');
}

function deleteTasks(index) {
    arrTasks.splice(index, 1);
    renderAllTasks();
}

function executeTask(index) {
    arrTasks[index].checked = true;
    renderAllTasks();
}

arrTasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderAllTasks();




