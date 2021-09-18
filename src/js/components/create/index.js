import {updateInput, addTasktoLocalStorage, createTask} from '../functions';

const create = () => {
    document.querySelector('#createTask').addEventListener('input', () => updateInput(document));
    document.querySelector('#createTaskBut').addEventListener('click', () => addTasktoLocalStorage(document));
}

export default create;