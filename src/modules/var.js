const itemList = document.querySelector('#item-list');
const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const storage = (todo) => {
  todo.sort((a, b) => a.index - b.index);
  localStorage.setItem('todo', JSON.stringify(todo));
};
const toDoInput = document.querySelector('#todo-input');

export {
  itemList, tasksArray, storage, toDoInput,
};