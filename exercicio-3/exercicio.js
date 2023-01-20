// ----------------EXERCICIO 1----------------

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// module.exports = {sum};

// ----------------EXERCICIO 2, 3 e 4----------------

// printMessage.js
// printMessage.js
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// const printMessage = (characterInfo) => {
//   if (!characterInfo || characterInfo.personagem === undefined) {
//     throw new Error('objeto inválido');
//   }
//   return ('Boas vindas, '+ characterInfo.personagem);
// };

// console.log(printMessage(info));

// module.exports = { info, printMessage };

// ----------------EXERCICIO BONUS----------------

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa

const searchEmployee = (id, detail) => {
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if(professionalBoard[index][detail] === undefined) {
      throw new Error('Informação indisponível');    
    }
    if (professionalBoard[index]['id'] === id) {
      return professionalBoard[index][detail];
    }
  }
  throw new Error('ID não identificada');
};

module.exports = searchEmployee;
