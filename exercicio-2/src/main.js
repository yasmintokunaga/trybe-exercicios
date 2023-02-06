import { validator } from 'validator';
import isEmail from 'validator/lib/isEmail';
import isTaxID from 'validator/lib/isEmail';

import "./style.css";

const input = document.getElementById('input');
const dropdown = document.getElementById('dropdown');
const btnValidation = document.getElementById('btn-validation');
const phrase = document.getElementById('phrase');

const verifyInput = (input, selectDropdown) => {
  if (selectDropdown === 'cpf') return isTaxID(input, 'pt-BR');
  if (selectDropdown === 'email') return isEmail(input);
};

btnValidation.addEventListener('click', () => {
  const inputText = input.value;
  const selectDropdown = dropdown.value;
  const validation = verifyInput(inputText, selectDropdown);
  console.log(validation);
  if (validation) {
    phrase.innerText = 'A validação retornou true';
  } else {
    phrase.innerText = 'A validação retornou false';
  }
})