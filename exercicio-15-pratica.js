// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array) {
  let indexMenor = 0;
  let valorMenor = array[0];

  for ( let index = 1; index < array.length; index += 1) {
    if (array[index] < valorMenor) {
      indexMenor = index;
      valorMenor = array[index];
    }
  }
  return indexMenor;
}

let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

console.log(menorValor(arrayTeste));
