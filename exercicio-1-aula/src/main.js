// console.log('Hello Wolrd');

import { nanoid } from 'nanoid';
import './style.css'

// console.log(nanoid());

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
