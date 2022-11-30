// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero (a, b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'Os dois valores são iguais';
    }
}

console.log(maiorNumero(5,5));