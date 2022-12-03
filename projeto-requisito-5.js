// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números

const highestCount = (arrayNumbers) => {
    
    let identifyHighestNumber = arrayNumbers[0];
    for (let index = 1; index < arrayNumbers.length; index += 1) {
        identifyHighestNumber = arrayNumbers[index] > identifyHighestNumber ? arrayNumbers[index] : identifyHighestNumber;
    }

    let count = 0;
    for (let index = 0; index < arrayNumbers.length; index += 1) {    
        count = arrayNumbers[index] === identifyHighestNumber ? count += 1 : count;
    }
    return count;
}

let arrayTest = [0, 0, 0];

console.log(highestCount(arrayTest));