import getTasks from "../getTasks";
import { removeFunc, loadTasks } from "../functions";

const remove = () => {
    let tasks = getTasks();
    document.querySelectorAll('#delete').forEach(element => {
        element.addEventListener('click', function() {
            removeFunc(this, tasks);
        });
    });
}

export default remove;