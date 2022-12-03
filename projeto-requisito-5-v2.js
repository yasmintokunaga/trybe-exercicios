// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números

function highestCount(arrayNumbers) {
    let identifyHighestNumber = arrayNumbers[0];
    let count = 1;

    for(let index = 1; index < arrayNumbers.length; index += 1) {
        if(arrayNumbers[index] > identifyHighestNumber){
            identifyHighestNumber = arrayNumbers[index];
            count = 1;
        } else if (arrayNumbers[index] === identifyHighestNumber){
            count += 1;
        }
    }
    return count;
}

let arrayTest = [9, 1, 2, 3, 9, 5, 7];

console.log(highestCount(arrayTest));