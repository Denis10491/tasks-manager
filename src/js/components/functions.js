import remove from './delete';
import getTasks from './getTasks';

const updateInput = () => {
    let input = document.getElementById('createTask'),
        inputLength = document.getElementById('createTaskLength'),
        count = input.value.length ?? 0,
        maxLength = 70;

    if (count > maxLength) {
        input.value = input.value.substr(0, maxLength);
        count = 70;
    } 
    (count > 0) ? inputLength.classList.add('create__input_length-null') : inputLength.classList.remove('create__input_length-null');
    inputLength.innerText = `${input.value.length}/${maxLength}`;
}

const addTasktoLocalStorage = ()  => {
    let input = document.getElementById('createTask'),
        date = new Date().toUTCString(),
        tasks = getTasks(),
        id = tasks.length,
        text = input.value,
        item = createTask(id, text);
    
    if (text.length > 0) {
        document.querySelector('.tasks__list').append(item);
        tasks.push({id: date, text: text});
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
        updateInput();
    }
}

const createTask = (id, text) => {
    let element = document.createElement('div');
    element.classList.add('tasks__item');
    element.setAttribute('id', id);
    element.innerHTML = `
        <div class="tasks__text">
            <p class="text__item">${text}</p>
        </div>
        <div class="tasks__control">
            <button class="tasks__delete tasks_but" id="delete">&#128473;</button>
        </div>
    `;
    return element;
}

const removeFunc = function(current, tasks) {
    let item = current.parentNode.parentNode,
        newTasksList = [];
    Object.keys(tasks).map(taskId => {
        if (taskId != item.id) newTasksList.push(tasks[taskId]);
    });
    localStorage.setItem('tasks', JSON.stringify(newTasksList));
    loadTasks();
    remove();
}

const loadTasks = () => {
    let tasks = getTasks(),
        arrKeysSorted = Object.values(tasks).map(task => task).sort((a, b) => new Date(a.id) - new Date(b.id)),
        tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = ``;
    Object.keys(arrKeysSorted).map(key => {
        tasksList.append(createTask(key, arrKeysSorted[key]['text']));
    });
    remove();
}

export {updateInput, addTasktoLocalStorage, createTask, removeFunc, loadTasks}