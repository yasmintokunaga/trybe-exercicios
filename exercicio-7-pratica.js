// 🚀 Modifique as concatenações para template literals.

const nome = 'Adiana'
const lastName = 'Soares';

// console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Olá, ${nome} ${lastName}!`);

// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }

const soma = (a, b) => a + b;

let a = 3;
let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da soma de ${a} + ${b} é ${soma(a,b)}`);