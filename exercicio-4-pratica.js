// crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;
let resultadoFatorial = fatorial;


for (let index = fatorial - 1; index > 0 ; index -=1 ){
    // console.log(resultadoFatorial+"*"+index);
    resultadoFatorial *= index;
    // console.log(resultadoFatorial);
}

console.log(resultadoFatorial);
