import './style.css';
import Todo from './modules/addremove.js';

const itemList = document.querySelector('#item-list');
const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];

const storage = (todo) => {
  todo.sort((a, b) => a.index - b.index);
  localStorage.setItem('todo', JSON.stringify(todo));
};

const populateHtml = () => {
  storage(tasksArray);
  itemList.innerHTML = tasksArray.map(
    (data) => `<li class="items">
          <div class='t-parent'>
            <input type="checkbox" ${data.completed ? 'checked' : ''} class="todo-item" name="car">
            <input for="" class="task" value="${data.description}">
          </div>
          <div>
            <!-- <svg class="w-2 h-2 option" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
            </path>
          </svg> -->
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

const toDoInput = document.querySelector('#todo-input');

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

const label = document.querySelectorAll('.task');
label.forEach((input, index) => input.addEventListener('change', () => {
  tasksArray[index].description = input.value;
  storage(tasksArray);
}));

export default tasksArray;
