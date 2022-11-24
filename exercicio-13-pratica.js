// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaPorcentagem = 45;
let notaConceito = 'sem nota';

if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
    notaConceito = 'A';
} else if (notaPorcentagem >= 80) {
    notaConceito ='B';
} else if (notaPorcentagem >= 70) {
    notaConceito = 'C';
} else if (notaPorcentagem >= 60) {
    notaConceito ='D';
} else if (notaPorcentagem >= 50) {
    notaConceito = 'E';
} else if (notaPorcentagem > 0) {
    notaConceito = 'F';
} else {
    console.log('por favor, inserir uma nota válida');
}

console.log(notaConceito);
