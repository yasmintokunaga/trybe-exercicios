// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorQuantidadeCaracter (array) {
  let indexMaior = 0;
  let caracterMaior = array[0].length;

  for (let index = 1; index < array.length; index += 1) {

    if(array[index].length > caracterMaior){
      indexMaior = index;
      caracterMaior = array[index].length;
    }
  }
  return array[indexMaior];
} 

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorQuantidadeCaracter(arrayTeste));

