import create from './components/create';
import remove from './components/delete';
import { loadTasks } from './components/functions';

loadTasks();
create();
remove();