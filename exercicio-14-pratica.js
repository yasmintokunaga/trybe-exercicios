// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

function maiorPalavra (frase) {
    let arraypalavras = frase.split(' ');
    let maior = arraypalavras [0];
    for (value of arraypalavras) {
        if(value.length > maior.length) {
            maior = value;
        }
    } return maior;
}

let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

console.log(maiorPalavra(frase));