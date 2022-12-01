// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(N) {
    let soma = 0;

    if (N > 0) {
        for (let index = 0; index < N; index += 1) {
            soma += (N - index);
        } return soma;
    } else {
        return 'Favor inserir um nuemro maior que zero';
    }
}

let valorTeste = 5;

console.log(somatorio(valorTeste));