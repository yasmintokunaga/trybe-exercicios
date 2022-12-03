// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números

function highestCount(arrayNumbers) {
    let identifyHighestNumber = arrayNumbers[0];

    for(let index = 1; index < arrayNumbers.length; index += 1) {
        if(arrayNumbers[index] > identifyHighestNumber){
            identifyHighestNumber = arrayNumbers[index];
        }
    }

    let count = 0;

    for(let index = 0; index < arrayNumbers.length; index += 1) {
        if(arrayNumbers[index] === identifyHighestNumber){
            count += 1;
        }
    }
    return count;
}

let arrayTest = [0, 4, 4, 4, 9, 2, 1];

console.log(highestCount(arrayTest));