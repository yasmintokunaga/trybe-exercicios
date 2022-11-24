// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const num1 = 15;
const num2 = 3;
const num3 = 10;

let maior;
let meio;
let menor;

if (num1 > num2) {
    if (num1 > num3){
        maior = num1;
        if (num2 > num3) {
            meio = num2;
            menor = num3;
        } else {
            meio = num3;
            menor = num2;
        }
    } else {
        meio = num1;
        maior = num3;
        menor = num2;
    }
} else if (num1 > num3) {
    meio = num1;
    maior = num2;
    menor = num3
} else {
    menor = num1;
    if (num2 > num3) {
        maior = num2;
        meio = num3;
    } else {
        maior = num3;
        meio = num2;
    }
}

console.log('O maior numero é: '+maior);
console.log('O numero do meio é: '+meio);    
console.log('O menor numero é: '+menor);