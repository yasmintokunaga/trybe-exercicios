// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeticaoNumeroArray(array) {

    let arrayContagem = [];

    for (let index = 0; index < array.length; index += 1) {
        arrayContagem[index] = [0];        
        for (let verify = 0; verify < array.length; verify += 1) {            
            if (index === verify) {
                arrayContagem [index] += 1;
            }
        }        
    }

    let indexMaior = 0;
    let valorMaior = arrayContagem[0];
    for(let index2 = 1; index2 <arrayContagem.length; index2 += 1){
        if(arrayContagem[index2] > valorMaior) {
            valorMaior = arrayContagem[index2];
            indexMaior = index2;
        }
    }
    return array[indexMaior];
}

let arrayTeste = [3, 3, 2, 5, 8, 2, 3];
console.log(repeticaoNumeroArray(arrayTeste));
