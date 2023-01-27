// const primeNumbers = [17, 23, 37]

// const sum = (a, b) => {
//   console.log(a + b);
// }

// const [first, second, third] = primeNumbers;

// sum(first, third) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const array = [comida, animal, bebida];

const [animal1, bebida1, comida1] = array;

console.log(comida1, animal1, bebida1); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo