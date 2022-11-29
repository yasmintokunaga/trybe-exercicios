// Faça um programa que diz se um número definido numa variável é primo ou não.

let n = 20;

let cont = 0;
for (let index = 2; index < n; index += 1) {
    if (n % index === 0) {
        cont += 1;
    }
}

if (cont === 0) {
    console.log('O numero :'+n+' é primo!!');
} else {
    console.log('O numero não é primo');
}