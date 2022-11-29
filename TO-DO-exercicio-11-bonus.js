// faça uma pirâmide com n asteriscos de base

// n = 5

//   *
//  ***
// *****

let n = 5;
let posicaoInicial = (n-1)/2;
let ladoEsquerdo = posicaoInicial;
let ladoDireito = posicaoInicial;

let arrayString = [];

for (let index = 0; index < n; index += 1){
    arrayString.push(' ');
}

for (let lin = 0; lin <= posicaoInicial; lin += 1) {
    for (let col = 0; col < n; col += 1) {
     
    
    console.log(arrayString.join(''));
}