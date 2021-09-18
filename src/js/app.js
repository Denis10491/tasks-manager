import create from './components/create';
import remove from './components/delete';
import getTasks from './components/getTasks';
import {createTask} from './components/functions';

const tasks = getTasks();
let arrKeysSorted = Object.keys(tasks).map(key => key).sort((a, b) => new Date(a) - new Date(b));
let tasksList = document.querySelector('.tasks__list');

arrKeysSorted.forEach(key => {
    tasksList.append(createTask(key, tasks.getItem(key)));
});

create();
remove();