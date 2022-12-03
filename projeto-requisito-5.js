// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números

const highestCount = (arrayNumbers) => {    
    let identifyHighestNumber = arrayNumbers[0];
    for (value of arrayNumbers) {
        identifyHighestNumber = value > identifyHighestNumber ? value : identifyHighestNumber;
    }
    let count = 0;
    for (value of arrayNumbers) {    
        count = value === identifyHighestNumber ? count += 1 : count;
    }
    return count;
}

let arrayTest = [0, 0, 0];
console.log(highestCount(arrayTest));