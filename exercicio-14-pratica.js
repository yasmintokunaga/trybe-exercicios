// Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function maiorValor(array) {
  let indexMaior = 0;
  let valorMaior = array[0];

  for ( let index = 1; index < array.length; index += 1) {
    if (array[index] > valorMaior) {
      indexMaior = index;
      valorMaior = array[index];
    }
  }
  return indexMaior;
}

let arrayTeste = [2, 3, 6, 7, 10, 1];

console.log(maiorValor(arrayTeste));