// Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function maiorValor(array) {
  let maior = 0;

  for ( let index = 1; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = index;
    }
  }
  return maior;
}

let arrayTeste = [2, 3, 6, 7, 10, 1];

console.log(maiorValor(arrayTeste));