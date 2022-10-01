import { tasksArray, toDoInput } from './var.js';
import Todo from './todo.js';
import populateHtml from './populate.js';

const inputMethod = () => {
  toDoInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const description = toDoInput.value;
      const newToDo = new Todo(description);
      tasksArray.push(newToDo);
      populateHtml();
      toDoInput.value = '';
      window.location.reload();
    }
  });
};
export default inputMethod;
