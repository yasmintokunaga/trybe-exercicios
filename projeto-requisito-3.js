// Implemente a função concatName que recebe um array de string e retorna uma string com último e primeiro item

const concatName = (arrayName) => `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;

let nameTest = ['Yasmin', 'Souza', 'Tokunaga'];
console.log(concatName(nameTest));