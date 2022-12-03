// Implemente a função fizzBuzz que recebe um array de números e retorna um array de string de acordo com o resultado

function fizzBuzz (arrayNumber) {
    let arrayString = [];

    for (value of arrayNumber){
        if (value % 3 === 0 && value % 5 === 0) {
            arrayString.push('fizzBuss');
        } else if (value % 3 === 0){
            arrayString.push('fizz');
        } else if (value % 5 === 0) {
            arrayString.push('buzz');
        } else {
            arrayString.push('bug!');
        }
    }
    return arrayString;
}

let arrayTest = [9, 25];

console.log(fizzBuzz(arrayTest));
