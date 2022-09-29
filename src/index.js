import './style.css';

const itemList = document.querySelector('#item-list');
const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];

const populateHtml = () => {
  itemList.innerHTML = tasksArray.map(
    (data, index) => `<li class="items">
          <div>
            <input type="checkbox" ${data.completed ? 'checked' : ''} class="todo-item" name="car">
            <label for="" contenteditable="true">${data.description}</label>
          </div>
          <svg class="w-2 h-2 option"  onclick='removeTask(${index})' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id='option' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
            </path>
          </svg>
        </li>`,
  ).join(' ');
};

populateHtml();

class Todo {
  constructor(description) {
    this.id = tasksArray.length + 1;
    this.description = description;
    this.completed = false;
  }
}

const removeTask = (index) => {
  tasksArray = tasksArray.filter((data, id) => id !== index);
  populateHtml();
};
removeTask(Todo.id);

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

// document.querySelector('#option').addEventListener('click', (e) => {
//   removeTask(this.id);
// });