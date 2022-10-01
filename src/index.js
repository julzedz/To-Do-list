import './style.css';
import editFunction from './modules/edittask.js';
import populateHtml from './modules/populate.js';
import inputMethod from './modules/input.js';
import status from './modules/status.js';
import clearAll from './modules/clear.js';

populateHtml();
inputMethod();
editFunction();
status();
clearAll();
