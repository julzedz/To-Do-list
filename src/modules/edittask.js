import { tasksArray, storage } from './var.js';

const editFunction = () => {
  const label = document.querySelectorAll('.task');
  label.forEach((input, index) => input.addEventListener('change', () => {
    tasksArray[index].description = input.value;
    storage(tasksArray);
  }));
};
export default editFunction;