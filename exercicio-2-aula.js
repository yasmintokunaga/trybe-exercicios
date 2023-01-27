

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };



// const getNationality = ({ firstName, nationality }) => {
//   if (nationality === undefined) {
//     const {nationality= 'Brazilian'} = person;
//     return `${firstName} is ${nationality}`;
//   }
//   return `${firstName} is ${nationality}`};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// Passando um valor default para a desestruturação de `nationality` sendo "Brazilian" então todo objeto que passarmos terá esse valor, caso não seja passado algum outro.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian