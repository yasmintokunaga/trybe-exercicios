// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

let salarioBruto = 3000;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto * (1 - 0.08);
} else if (salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto * (1 - 0.09);
} else if (salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto * (1 - 0.11);
} else {
    salarioLiquido = salarioBruto - 570.88;
}

if (salarioLiquido <= 1903.98) {
    salarioLiquido = salarioLiquido;
} else if (salarioLiquido <= 2826.65) {
    salarioLiquido = salarioLiquido + 142.80 - salarioLiquido * 0.075;
} else if (salarioLiquido <= 3751.05) {
    salarioLiquido = salarioLiquido + 354.80 - salarioLiquido * 0.15;
} else if (salarioLiquido <= 4664.68) {
    salarioLiquido = salarioLiquido + 636.13 - salarioLiquido * 0.225;
} else {
    salarioLiquido = salarioLiquido + 869.36 - salarioLiquido * 0.275;
}

console.log('Resultado: R$'+salarioLiquido);