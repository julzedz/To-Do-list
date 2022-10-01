import populateHtml from './populate.js';
import { storage, tasksArray } from './var.js';

const clearAll = () => {
  const clear = document.querySelector('#clear-button');
  clear.addEventListener('click', () => {
    const completedTasks = tasksArray.filter((data) => data.completed === true);
    completedTasks.forEach((data) => {
      const index = tasksArray.indexOf(data);
      tasksArray.splice(index, 1);
    });
    storage(tasksArray);
    populateHtml();
    window.location.reload();
  });
};

export default clearAll;
