import "./style.css";

const tasksArray = [
  {
    description: "Fix car",
    completed: true,
    id: 1,
  },
  {
    description: "Wash dishes",
    completed: false,
    id: 2,
  },
  {
    description: "Complete project",
    completed: false,
    id: 3
  }
];
const itemList = document.querySelector('#item-list');

const populateHtml = () => {
  itemList.innerHTML = tasksArray.map(
    (data, index) => `<li class="items">
          <div>
            <input type="checkbox" ${data.completed ? 'checked' : ''} class="todo-item" name="car">
            <label for="car">${data.description}</label>
          </div>
          <svg class="w-2 h-2 option" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
            </path>
          </svg>
        </li>`
  ).join(' ');
}

populateHtml()
