// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menor = array[0];
let maior = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (menor.length > array[index].length) {
        menor = array[index];
    } else if (maior.length < array[index].length) {
        maior = array[index];
    }
}

console.log('A menor palavra é: '+menor);
console.log('A maior palavra é: '+maior);