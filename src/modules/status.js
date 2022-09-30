import { storage, tasksArray } from './var.js';

const status = () => {
  const box = document.querySelectorAll('.box');
  box.forEach((input, index) => input.addEventListener('change', () => {
    if (tasksArray[index].completed === false) {
      tasksArray[index].completed = true;
    } else {
      tasksArray[index].completed = false;
    }
    storage(tasksArray);
  }));
};
export default status;