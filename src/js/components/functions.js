const updateInput = () => {
    let input = document.querySelector('#createTask');
    let inputLength = document.querySelector('#createTaskLength');
    let count = input.value.length ?? 0;
    let maxLength = 70;

    if (count > maxLength) {
        input.value = input.value.substr(0, maxLength);
        count = 40;
    } 
    if (count > 0) {
        inputLength.style.cssText = `
            position: absolute;
            top: 0%;
            z-index: 10;
            color: #0CAADC;
            background: #001021;
        `;
    }
    else {
        inputLength.style.cssText = `
            position: absolute;
            top: 50%;
            left: 16px;
            z-index: 0;
            color: lightgray;
            background: none;
        `;
    }
    inputLength.innerText = `${input.value.length}/${maxLength}`;
}

const addTasktoLocalStorage = function () {
    let input = document.querySelector('#createTask');
    let id = new Date().toUTCString();
    let text = input.value;
    let item = createTask(id, text);

    document.querySelector('.tasks__list').append(item);
    localStorage.setItem(id, text);
    input.value = '';

    updateInput(document);
}

const createTask = (id, text) => {
    let element = document.createElement('div');
    element.classList.add('tasks__item');
    element.setAttribute('id', `${id}`);
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

export {updateInput, addTasktoLocalStorage, createTask}