// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function adicao(a, b){
    let resultado = a + b;
    return resultado;
}

function subtracao(a, b){
    let resultado = a - b;
    return resultado;
}

function multiplicacao(a, b){
    let resultado = a * b;
    return resultado;
}

function divisao(a, b){
    let resultado = a / b;
    return resultado;
}

function modulo(a, b){
    let resultado = a % b;
    return resultado;
}

console.log('Adição 1 + 2 = ' + adicao(1,2));
console.log('Subtração 3 - 2 = ' + subtracao(3,2));
console.log('Multiplicação 5 * 2 = ' + multiplicacao(5,2));
console.log('Divisão 4 / 2 = ' + divisao(4,2));
console.log('Modulo 3 % 2 = ' + modulo(3,2));
