// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNumero(a, b, c) {
  let maior = a;
  let array = [a, b, c];

  if (a === b && a === c) {
    return 'todos os valores são iguais';
  } else {
    for (let index = 1; index < array.length; index += 1) {
      if (array[index] > maior) {
        maior = array[index];        
      }
    }
    return maior;
  }
}

console.log(maiorNumero(5, 6, 7));

