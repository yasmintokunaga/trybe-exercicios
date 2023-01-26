// -----> 1 <------
// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(rectangle[0], rectangle[1])); // Altere o parâmetro recebido por rectangleArea()
// });

// -----> 2 <------
// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// // console.log(sum(4, 5, 6));

// -----> 3 <------

// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

// Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = (object) => {
//   const {name, age, likes} = object;
//   return `${name} is ${age} years old and likes ${likes.join(', ')}.`
// };
// // <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// // Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// -----> 4 <------
// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
//   // bornIn: nascido em
// ];

// const filterPeople = () => {
//   filterNationality = (element) => element.nationality === 'Australian';
//   const returnArray = people.filter((element) => filterNationality(element)).filter((element) => element.bornIn > 2000);
//   return returnArray.forEach((element, index, array) => {
    
//     console.log(`Hi, I'm ${element.name}, I born in ${element.bornIn} and I'm ${element.nationality}`);
//     console.log(index, array);
//   });
// };

// console.log(filterPeople());

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
//   // measurementUnit: unidade de medida
// ];

// const shipLength = (navio) => {
//   const {name, length, measurementUnit} = navio;
//   return `${name} is ${length} ${measurementUnit} long`;
// }

// // retorno esperado
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const {spring, summer, autumn, winter} = yearSeasons;

const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);
