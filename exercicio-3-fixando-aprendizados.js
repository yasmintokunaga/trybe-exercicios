// Pensando numa estrutura de repetição, aponte quantas vezes você pode subtrair 5 de 100

let cont = 0;

for (let index = 100; index > 0; index -= 5) {
    cont += 1;
} 

console.log(cont);