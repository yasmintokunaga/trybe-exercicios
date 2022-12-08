// console.log(document.querySelector('#elementoOndeVoceEsta')); //section elementoOndeVoceEsta

// console.log(document.querySelector('#elementoOndeVoceEsta').parentNode); //section pai

document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue'; //muda cor da section pai

const primeiroFilho = document.querySelector('#primeiroFilho');
primeiroFilho.innerText = 'Ola sou o primeiro filho'; //texto na section primeiro filho

// console.log(document.querySelector('#pai').firstElementChild); //section primeiro filho

// console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling); //section primeiro filho

// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling); //o próximo nó - Atenção

// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling); //section terceiro filho

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling); //terceiro filho

