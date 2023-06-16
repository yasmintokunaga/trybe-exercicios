const readline = require('readline-sync') //modulo externos
const imc = require('./imc'); //modulo interno
const fs = require('fs'); //modulo nativo

const askName = () => {
  return readline.question('Qual é o seu nome?');
};

const askHeight = () => {
  return readline.questionFloat('Qual é a sua altura?');
};

const askWeigth = () => {
  return readline.questionFloat('Qual é o seu peso?');
};

const name = askName();
const heigth = askHeight();
const weigth = askWeigth();

const result = imc(weigth, heigth);
fs.appendFileSync('imc.txt', `O IMC de ${name} é ${result}\n`);
const data = fs.readFileSync('./imc.txt', {encoding:'utf-8', flag:'r'});

console.log(data);