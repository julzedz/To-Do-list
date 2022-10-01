import { tasksArray, storage, itemList } from './var.js';
import Todo from './todo.js';

const populateHtml = () => {
  storage(tasksArray);
  itemList.innerHTML = tasksArray.map(
    (data) => `<li class="items">
          <div class='t-parent'>
            <input type="checkbox" class='box' ${data.completed ? 'checked' : ''} class="todo-item" name="car">
            <input for="" class="task" value="${data.description}">
          </div>
          <div>
          <button class="remove-btn">x</button>
          </div>
        </li>`,
  ).join(' ');
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn, index) => btn.addEventListener('click', () => {
    const item = index + 1;
    Todo.removeTask(item);
    populateHtml();
  }));
};

export default populateHtml;