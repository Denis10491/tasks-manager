import getTasks from '../getTasks';
import {updateInput, addTasktoLocalStorage, removeFunc, loadTasks} from '../functions';

const create = () => {
    document.getElementById('createTask').addEventListener('input', () => updateInput());
    document.getElementById('form-create').addEventListener('submit', () => {
        event.preventDefault();
        addTasktoLocalStorage();
        loadTasks();
    });
}

export default create;