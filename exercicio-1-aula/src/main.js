// console.log('Hello Wolrd');

import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css'

// console.log(nanoid());
const passwordBtnEl = document.getElementById('btn-generate');
const displayPasswordEl = document.querySelector('h2');
const copyButton = document.getElementById('btn-copy');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

copyButton.addEventListener('click', () => {
  const copyPassword =   displayPasswordEl.innerText;
  copy(copyPassword);
  alert('senha copiada')
}
);