// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let arrayPrimos = [];

for (index = 2 ; index <= 50; index += 1) {

    let contDivisor = 0;

    for (let indexDivisor = (index -1 ); indexDivisor > 1; indexDivisor -= 1) {
        if(index % indexDivisor === 0) {
            contDivisor += 1;
        }
    }

    if (contDivisor === 0) {
        arrayPrimos.push(index);
    }
}

console.log('Os numeros primos entre 2 e 50 são: '+ arrayPrimos.join(', '));
console.log('O maior numero primo é: '+arrayPrimos[arrayPrimos.length-1]);