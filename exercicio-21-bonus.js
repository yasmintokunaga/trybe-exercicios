//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

function arrayOfNumbers (array) {
    let arrayEvenNumer = [];

    for (let indexExt = 0; indexExt < array.length; indexExt += 1) {
        for (let indexInt = 0; indexInt < array[indexExt].length; indexInt += 1) {
            if(array[indexExt][indexInt] % 2 === 0) {
                arrayEvenNumer.push(array[indexExt][indexInt]);
            }
        }
    }
    return arrayEvenNumer;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));


