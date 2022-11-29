// crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;
let arrayFatorial = [];

for (let index = 0; index < fatorial; index += 1) {
    arrayFatorial[index] = fatorial - index;
}

let resultadoFatorial = arrayFatorial[0]; 

for (let index = 1; index < fatorial; index += 1) {
resultadoFatorial *= arrayFatorial[index];
}

console.log(fatorial + '! = ' + arrayFatorial.join(' * ') + ' = '+resultadoFatorial);
