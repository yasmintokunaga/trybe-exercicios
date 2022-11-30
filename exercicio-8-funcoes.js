// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNumero (a, b, c){
  let maior = a;
  let igual = false;
  if (b >a) {
    maior = b;
    if (c > b){
        maior = c;
    } else {
        maior = b;
    }
  } else if (c > a) {
    maior = c;
  } else if (a > c){
    maior = a;
  } 
  else {
    igual = true;
  }
  if (igual){
    return 'Os valores são todos iguais';
  } else {
    return maior;
  }
}

console.log(maiorNumero(2,2,2));

