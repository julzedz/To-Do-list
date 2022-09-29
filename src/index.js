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
          <div>
            <svg class="w-2 h-2 option" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
            </path>
          </svg>
          <button ${index} id="remove-btn">x</button>
          </div>
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

  static updateIndex = () => {
    tasksArray.forEach((data, index) => { data.index = index + 1; });
  }

  static removeTask = (index) => {
    tasksArray.splice(index - 1, 1);
    this.updateIndex();
  }
}

// const removeTask = (index) => {
//   tasksArray.filter((data, id) => id !== index);
//   populateHtml();
// };
// removeTask(Todo.id);

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
