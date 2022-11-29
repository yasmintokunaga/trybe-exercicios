// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 5;
let stringAsterisco = '';

for(let index = 0; index < n; index += 1 ){
    stringAsterisco += '*';
    // console.log(stringAsterisco);
}

for (let indexPrint = 0; indexPrint < n; indexPrint += 1) {
    console.log(stringAsterisco);
}