import './style.css';
import Todo from './modules/todo.js';
import editFunction from './modules/edittask.js';
import {
  tasksArray, toDoInput,
} from './modules/var.js';
import populateHtml from './modules/populate.js';

populateHtml();

const inputMethod = () => {
  toDoInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const description = toDoInput.value;
      const newToDo = new Todo(description);
      tasksArray.push(newToDo);
      populateHtml();
      toDoInput.value = '';
    }
  });
};

inputMethod();

editFunction();
