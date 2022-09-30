import './style.css';
import Todo from './modules/addremove.js';
import {
  itemList, tasksArray, storage, toDoInput, label,
} from './modules/var.js';

const populateHtml = () => {
  storage(tasksArray);
  itemList.innerHTML = tasksArray.map(
    (data) => `<li class="items">
          <div class='t-parent'>
            <input type="checkbox" ${data.completed ? 'checked' : ''} class="todo-item" name="car">
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

populateHtml();

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

label.forEach((input, index) => input.addEventListener('change', () => {
  tasksArray[index].description = input.value;
  storage(tasksArray);
}));
